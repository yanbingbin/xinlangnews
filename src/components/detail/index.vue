<template>
  <div>
    <div class="header">
      <img src="../../assets/back.png" @click="backToIndex"  alt="">
      <span>{{this.$store.state.channels[this.$store.state.channelIndex]}}</span>
      <img :src="getImgSrc" @click="addCollection" alt="">
    </div>
    <div class="content">
      <div class="container">
        <div class="title">{{news.title}}</div>
        <div class="info">
          <span>{{news.time}}</span>
          <span>{{news.src}}</span>
        </div>
        <img :src="news.pic || require('../../assets/notFoundImg.jpg')" alt="">
        <div class="news-content" v-html="news.content"></div>
      </div>

    </div>
  </div>
</template>

<script>
    export default{
        created() {
           console.log(this.$store.state.news[this.$store.state.newsIndex])
        },
        computed: {
          news() {
              return this.$store.state.news[this.$store.state.newsIndex]
          },
          getImgSrc() {
              return this.$store.state.likeImg
          }
        },
        methods: {
          addCollection() {
              if(this.$store.state.likeImg == require("../../assets/like.png")) {
                  this.$store.commit('collectionImg',require("../../assets/collect.png"))
                  this.$store.commit('addCollection',this.news)
              } else {
                  this.$store.commit('collectionImg',require("../../assets/like.png"))
                  this.$store.commit('deleteCollection',this.news)
              }
          },
          backToIndex() {
              this.$router.push('./')
              this.$store.dispatch('getNews','头条')
              this.$store.state.load = true
              this.$store.state.activeIndex = 0
          }
        }
    }
</script>

<style>
.header {
  width: 100%;
  height: 1.33rem;
  background-color: #07a0ec;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header img {
  width: 25px;
  height: 25px;
  padding: 0  .2rem;
}
.content {
  width: 100%;
}
.content .container {
  margin: 20px;
}
.container .title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.container .info {
  text-align: center;
  margin: 20px 0;
}
.info span:last-child {
  margin-left: 10px;
}
.container img {
  width: 100%;
  margin-bottom: 20px;
}
.news-content {
  font-size: 16px;
  line-height: 30px;
}
</style>




































