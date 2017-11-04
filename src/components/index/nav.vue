<script src="../../../build/dev-server.js"></script>
<template>
  <div>
    <div class="nav-content">
      <div class="nav">
        <div class="channel">
          <ul>
            <li v-for="(channel,index) in channels" :class="{active: isActive === index}"  @click="clickChannel(channel,index)">{{channel}}</li>
          </ul>
        </div>
        <div class="add-channel">
          <img src="../../assets/add.png"  @click="toChannelManage">
        </div>
      </div>
      <div class="news-content">
        <div v-show="isLoading" class="loading">
          <img src="../../assets/loading.svg" alt="">
        </div>
        <carousel v-show="this.$store.state.channelIndex === 0"></carousel>
        <div class="section" v-for="(newsItem, index) in getNews" @click="toNewsDetail(newsItem,index)">
          <div class="news">
            <div class="news-left">
              <img :src="newsItem.pic || require('../../assets/notFoundImg.jpg')" alt="">
            </div>
            <div class="news-right">
              <div class="news-title">{{newsItem.title}}</div>
              <div class="news-message">
                <span>{{newsItem.time}}</span>
                <span>{{newsItem.src}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import carousel from '@/components/index/carousel'
  export default{
    components: {
      carousel
    },
    created() {  // 组件实例创建完成,DOM未生成
      this.$store.dispatch('getChannels')  // 拿到新闻频道数据
      this.$store.dispatch('getNews','头条')  // 加载头条对应得新闻数据
      this.$store.commit('loading',true)
    },
    computed: {
      isLoading() {
          return this.$store.state.load
      },
      channels() {
          return this.$store.state.channels
      },
      getNews() {
          return this.$store.state.news
      },
      isActive: {
          get: function () {
            return this.$store.state.activeIndex
          },
          set: function (newVal) {
            return this.$store.state.activeIndex = newVal
          }
      }
    },
    methods: {
      toChannelManage() {
          this.$router.push('/channelManage')
      },
      clickChannel(channel,index) {
          this.$store.state.news = ''
          this.$store.state.load = true
          this.$store.commit('saveChannelsIndex',index)
          this.$store.commit('IsActive',index)
          this.$store.dispatch('getNews',channel)
          this.isActive = index
          scrollTo(0,0)
      },
      toNewsDetail(item,index) {
          this.$store.commit('saveNewsIndex',index)
          this.$router.push('/detail')
          // 从收藏数组找该点击的新闻是否在收藏列表,来显示收藏的图形
          if(JSON.stringify(this.$store.state.collection).indexOf(JSON.stringify(this.$store.state.news[this.$store.state.newsIndex]))) {
              this.$store.commit('collectionImg',require('../../assets/collect.png'))
          } else {
              this.$store.commit('collectionImg',require('../../assets/like.png'))
          }
      }
    }
  }
</script>

<style scoped>
.nav-content {
  margin-top: 1.2rem;
}
.nav {
  width: 100%;
  height: .96rem;
  background-color: #f4f5f6;
  display: flex;
  position: fixed;
  z-index: 99;
}
.channel {
  display: inline-block;
  flex: 1;  /*长度伸缩为1*/
  white-space: nowrap;  /*不进行换行*/
  align-items: center;
  overflow-x: scroll; /*超出内容可以滚动*/
  font-size: .45rem;
  color: #505050;
}
.channel ul {
  width: 100%;
  height: .96rem;
  display: flex;
  align-items:center;
}
.channel ul li {
  display: inline-block;
  margin-left: .32rem;
  margin-right: .32rem;
}
.active {
  color: #07a0ec;
}
.channel::-webkit-scrollbar { /*滚动条*/
  height: 0;
}
.add-channel {
  display: inline-block;
  width: 10%;
  height:100%;
  border-left: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items:center;
}
.add-channel img {
  width: .53rem;
  height: .53rem;
}
.news-content {
  padding-top: .96rem;
}
.loading {
  position: absolute;
  top: 2.16rem;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background-color: #fff;
  z-index: 99;
}
.loading img {
  margin-top: 50px;
  width: 100px;
  height:100px;
  animation: loading .8s linear infinite;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.section {
  width: 100%;
  height: 2.5rem;
  border-bottom: 1px solid #ccc;
}
.news {
  height: 2.25rem;
  box-sizing: border-box;
  margin: 10px;
  display: flex;
}
.news-left {
  width: 2.8rem;
  height: 100%;
  display: inline-block;
}
.news-left img {
  width: 100%;
  height: 100%;
}
.news-right {
  flex: 1;
  padding-left: 30px;
}
.news-title {
  width: 100%;
  height: 62%;
  font-size: 18px;
  color: #404040;
  overflow: hidden;
}
.news-message {
  width: 100%;
  height: 38%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.section {
  width: 100%;
  height: 2.5rem;
  border-bottom: 1px solid #ccc;
}
.news {
  height: 2.25rem;
  box-sizing: border-box;
  margin: 10px 10px;
  display: flex;
}
.news-left {
  height: 100%;
  width: 2.8rem;
  display: inline-block;
}
.news-left img {
  width: 100%;
  height: 100%;
}
.news-right {
  flex: 1;
  padding-left: 10px;
}
.news-title {
  width: 100%;
  height: 62%;
  color: #404040;
  font-size: 18px;
  line-height: 26px;
  overflow: hidden;
}
.news-message {
  width: 100%;
  height: 38%;
  display: flex;
  align-items: flex-end;
  color: #888;
  justify-content: space-between;
}
</style>














