import {GLOBAL_API_DOMAIN} from './config.js';
import axios from 'axios'
import qs from 'qs'

let axiosInstance;
let typeOf = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
  return typeof obj
} : function (obj) {
  return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
};

// 封装请求
class MyRequest {
  constructor() {
    // 创建axios实例
    // application/json   application/x-www-form-urlencoded
    const isProduction = (process.env.NODE_ENV === 'development');
    if (isProduction) {
      // 开发环境
      axiosInstance = axios.create({
        baseURL: GLOBAL_API_DOMAIN,
        timeout: 30000,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } else {
      // 生产环境
      axiosInstance = axios.create({
        baseURL: GLOBAL_API_DOMAIN,
        timeout: 30000,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    // 添加请求拦截器
    axiosInstance.interceptors.request.use(function (config) {
      console.log('baseUrl', '---------->', config.baseURL);
      // // open_id 用户在不同平台上对应的唯一值
      // let openId = global.myStore.get(global.myStore.staticName.ACCESS_OPENID)
      // if (config.data && !config.data.hasOwnProperty('open_id') && openId) {
      //   config.data['openId'] = openId
      //   //config.data['openId'] = 'omPPGjowdS6YWZ-JTkqQQtTL5VTM'
      // }
      //
      // // 用户信息
      // let userInfo = global.myStore.get(global.myStore.staticName.USER_INFO)
      // if (config.data && !config.data.hasOwnProperty('memberId') && userInfo && userInfo.id) {
      //   //config.data['memberId'] = '4770077'
      //   config.data['memberId'] = userInfo.id
      // }
      //
      // let sysType = global.myStore.get(global.myStore.staticName.CITY_CODE)
      // if (config.data && !config.data.hasOwnProperty('sysType') && sysType) {
      //   config.data['sysType'] = sysType
      // }
      //
      // // wx 代表微信  ali 代表支付宝
      // if (config.data && !config.data.hasOwnProperty('system_type')) {
      //   config.data['system_type'] = global.myStore.get(global.myStore.staticName.SYSTEM_TYPE)
      // }

      // 在发送请求之前做些什么
      if (config.method === 'post') {
        config.data = qs.stringify(config.data)
      } else if (config.method === 'get') {
        config.params = config.data
      }
      return config
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error)
    });

    // 添加响应拦截器
    axiosInstance.interceptors.response.use((response) => {
      // 对响应数据做点什么
      if (!response || !response.data) {
        return Promise.reject(response)
      } else if (response.data.status != 200) {
        //   // 处理所有的错误
        //
        //   // 864 表示不存在的用户， 869 表示用户被冻结
        //   if (response.data.status == 864) {
        //     global.myStore.remove(global.myStore.staticName.USER_INFO)
        //     return Promise.reject(response.data)
        //   } else if (response.data.status == 869) {
        //     sessionStorage.clear()


        //     console.log('--------------869------------------')
        //     global.app.$vux && global.app.$vux.alert && global.app.$vux.alert.show({
        //       title: '出错了',
        //       content: response.data.info,
        //       onShow() {
        //       },
        //       onHide() {
        //         console.log('--------------869--onHide----------------')
        //         global.app.$router.push('/error')
        //       }
        //     });
        //     return Promise.reject(response.data)
        //   }
        //
        //   let result = response.data
        //   if (result.info) {
        //     global.app.$vux.toast.text(result.info, 'middle')
        //   } else {
        //     global.app.$vux.toast.text('请求出错了,请稍后再次尝试', 'middle')
        //   }
        return Promise.reject(response)
      }
      return response.data
    }, function (error) {
      console.log('error: ', error);
      // global.app.$vux.toast.text('请求出错了,请稍后再次尝试', 'middle');
      // 对响应错误做点什么
      return Promise.reject(error)
    })
  }

  // 是否是对象
  isObject(obj) {
    return (typeof obj === 'undefined' ? 'undefined' : typeOf(obj)) === 'object' && obj !== null
  }

  // 继承扩展
  extend(obj) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key]
    }
    if (this.isObject(obj) && args.length > 0) {
      if (Object.assign) {
        return Object.assign.apply(Object, [obj].concat(args))
      }
      args.forEach(function (arg) {
        if (this.isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            obj[key] = arg[key]
          })
        }
      })
    }
    return obj
  }

  sendRrquest(url, method, data, header) {
    return axiosInstance({
      method: method,
      url: url,
      data: data,
      headers: header
    }).catch(function (error) {
      console.log('catch:', error);
    });
  }
}

let myRequest = new MyRequest();

// 出请求
let MyHttp = function (defaultParams, ALL_API) {
  let resource = {};
  for (let actionName in ALL_API) {
    let _config = ALL_API[actionName];
    resource[actionName] = (pdata, pathParam) => {
      let paramsData = myRequest.extend({}, defaultParams, pdata);
      let url = _config.url;
      if (pathParam) {
        url = url + pathParam
      }
      return myRequest.sendRrquest(url, _config.method, paramsData, {
        'Content-Type': 'application/json'
      })
    }
  }
  return resource
};

export default MyHttp
