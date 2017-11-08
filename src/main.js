// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.prototype.$http = axios

Vue.config.productionTip = false;

/* 状态管理 */
const store = new Vuex.Store({
  state: {
    channels: '', // 新闻频道列表
    channelIndex: 0, // 该新闻频道的索引
    news: '',  // 该新闻频道下的新闻
    newsIndex: 0, //  点击的新闻的索引
    activeIndex: 0,  // 目前活动的新闻频道
    load: false,  // 切换时显示的加载动画状态
    showSidebar: false,  // 显示侧边栏
    showLogin: false,  // 显示登录
    collection: [],  // 收藏新闻列表
    likeImg: require('./assets/collect.png') // 点击切换收藏图标
  },
  mutations: {
    saveChannels(state,data){  // 保存获取的新闻频道
      state.channels = data
    },
    saveChannelsIndex(state,index) {  // 保存点击的频道的索引位置
      state.channelIndex = index
    },
    saveNews(state,data) {   // 保存得到该频道的数据
      state.news = data
    },
    saveNewsIndex(state,index) {   // 保存点击新闻的索引
      state.newsIndex = index
    },
    IsActive(state,index) {    // 活动状态的新闻频道索引
      state.activeIndex = index
    },
    showSiderbar(state,status) { // 显示侧边栏
      state.showSidebar = status
    },
    showLogin(state,status) {  // 显示登录
      state.showLogin = status
    },
    loading(state, status) {    // 加载之前的小圈圈
      state.load = status
    },
    incrementChannels(state,item) {   // 添加频道
      state.channels.push(item)
    },
    decrementChannels(state,index) {   // 删除频道
      state.channels.splice(index,1)
    },
    addCollection(state,news) {   // 添加收藏新闻
      state.collection.push(news)
    },
    deleteCollection(state,news) {  // 移除收藏新闻
      state.collection.splice(state.collection.indexOf(news),1)
    },
    collectionImg(state,url) {  // 显示收藏新闻图片
      state.likeImg = url
    }
  },
  actions: {    // actions其实只是普通的函数，正是因为不可以在mutation中进行异步操作才要action
    getChannels({commit}) {  // 调用数据接口拿到新闻频道
      let url = '/api/channel?appkey=ca05a06b9221f5d1'
      return new Promise((resolve,reject) => {
        axios.get(url)
          .then(res => {
            commit('saveChannels',res.data.result)
          })
          .catch(function (err) {
            console.log(err)
          })
        resolve()
      })
    },
    getNews({commit},channel) { // 通过传入新闻频道获取具体新闻
      let url = '/api/get?channel='+channel+'&start=0&num=20&appkey=ca05a06b9221f5d1'
      return new Promise((resolve,reject) => {
        axios.get(url)
          .then(res => {
            commit('saveNews',res.data.result.list)
          })
          .then(() => {
            store.state.load = false
          })
          .catch(function (err) {
            console.log(err)
          })
        resolve()
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
