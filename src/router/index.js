import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import header from '@/components/index/header'
import search from '@/components/index/nav'
import carousel from '@/components/index/carousel'
import nav from '@/components/index/nav'
import channelManage from '@/components/channelManage/index'
import detail from '@/components/detail/index'
import siderbar from '@/components/index/siderbar'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/header',
      name: 'header',
      component: header
    },{
      path: '/search',
      name: 'search',
      component: search
    },{
      path: '/carousel',
      name: 'carousel',
      component: carousel
    },{
      path: '/nav',
      name: 'nav',
      component: nav
    },{
      path: '/channelManage',
      name: 'channelManage',
      component: channelManage
    },{
      path: '/detail',
      name: 'detail',
      component: detail
    },{
      path: '/siderbar',
      name: 'siderbar',
      component: siderbar
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition) {
      setTimeout(() => {
        window.scrollTo(savedPosition.x, savedPosition.y)
      }, 200)
    }
  }
})
