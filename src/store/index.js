import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

// 开发模式下使用日志，和谷歌浏览器里面的vuedevtool插件类似
//只修改state的时候会在控制台打印一些信息
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

// 调试,开发模式开启严格模式，要使用mutations提交
const debug = process.env.NODE_ENV !== 'production';

const state = {
  userInfo: localStorage['userInfo'] ? JSON.parse(localStorage['userInfo']) : null,
  title: '首页',
  isLoading: false,
  direction: 'forward'
};

const mutations = {
  UPDATE_USERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  UPDATE_TITLE(state, title) {
    state.title = title
  },
  UPDATE_LOADING(state, status) {
    state.isLoading = status
  },
  UPDATE_DIRECTION(state, direction) {
    state.direction = direction
  },
};

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
