import MyHttp from './http'

const ALL_API = {
  getUserList: {       //获取用户列表
    method: 'GET',
    url: 'data/Android/10/1'
  }
};

const Api = new MyHttp({}, ALL_API);

export default Api;
