import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import header from '@/components/index/header'
import search from '@/components/search/index'
import searchDetail from '@/components/search/detail'
import channelManage from '@/components/channelManage/index'
import detail from '@/components/detail/index'
import collection from '@/components/collection/index'
import collectionDetail from '@/components/collection/detail'
import selfInfo from '@/components/selfInfo/index'

Vue.use(Router)

export default new Router({
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
      path: '/channelManage',
      name: 'channelManage',
      component: channelManage
    },{
      path: '/detail',
      name: 'detail',
      component: detail
    },{
      path: '/collection',
      name: 'collection',
      component: collection
    },{
      path: '/collectionDetail',
      name: 'collectionDetail',
      component: collectionDetail
    },{
      path: '/searchDetail',
      name: 'searchDetail',
      component: searchDetail
    },{
      path: '/selfInfo',
      name: 'selfInfo',
      component: selfInfo
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
