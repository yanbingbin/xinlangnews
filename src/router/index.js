import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import header from '@/components/common/header'
import search from '@/components/common/nav'
import carousel from '@/components/common/carousel'
import nav from '@/components/common/nav'

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
