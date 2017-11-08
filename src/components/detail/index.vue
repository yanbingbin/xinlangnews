<template>
  <div>
    <div class="header">
      <img src="../../assets/back.png" @click="backToIndex"  alt="">
      <span>{{this.$store.state.channels[this.$store.state.channelIndex]}}</span>
      <img :src="getImgSrc" @click="addCollection" alt="">
    </div>
    <div class="content">
      <div class="container">  <!-- 防止报错 newsInfo && newsInfo.title-->
        <div class="title">{{newsInfo && newsInfo.title}}</div>
        <div class="info">
          <span>{{newsInfo && newsInfo.time}}</span>
          <span>{{newsInfo && newsInfo.src}}</span>
        </div>
        <img :src="newsInfo && newsInfo.pic || require('../../assets/notFoundImg.jpg')" alt="">
        <div class="news-content" v-html="newsInfo && newsInfo.content"></div>
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
          newsInfo() {
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
                  this.$store.commit('addCollection',this.newsInfo)
              } else {
                  this.$store.commit('collectionImg',require("../../assets/like.png"))
                  this.$store.commit('deleteCollection',this.newsInfo)
                console.log('delete')
              }
          },
          backToIndex() {
              this.$router.push('./')
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




































