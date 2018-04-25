import Vue from 'vue'
import store from './../store'

import Router from 'vue-router'
import home from '../pages/home/home'
import detail from '../pages/home/detail'
import ranking from '../pages/ranking/ranking'
import publish from '../pages/publish/publish'
import about from '../pages/about/about'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
});

router.beforeEach((to, from, next) => {
  store.commit('UPDATE_LOADING', true);
  next()
});

router.afterEach(function (to, from) {
  setTimeout(() => {
    store.commit('UPDATE_LOADING', false)
  }, 300)
});

export default router
