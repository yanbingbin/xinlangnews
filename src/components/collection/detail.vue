<template>
  <div class="detail">
    <div class="header">
      <img src="../../assets/back.png" @click="goback">
      <span>收藏新闻</span>
      <span>新闻</span>
    </div>
    <div class="content">
      <div class="container">
        <div class="title">{{$route.params.item && $route.params.item.title}}</div>
        <div class="message">
          <span>{{$route.params.item && $route.params.item.time}}</span>
          <span>{{$route.params.item && $route.params.item.src}}</span>
        </div>
        <img :src="$route.params.item && $route.params.item.pic || require('../../assets/notFoundImg.jpg')" alt="">
        <div class="news-content" v-html="$route.params.item && $route.params.item.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
        created() {
          console.log(this.$route.params.item)
        },
        methods: {
            goback() {
                this.$router.back(1)
            }
        }
    }
</script>

<style scoped>
.detail {
  overflow: hidden;
}
.header {
  width: 100%;
  height: 1.3rem;
  font-size: 18px;
  background-color: #0994ec;
  color: #fff;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
}
.header img {
  width: 25px;
  height: 25px;
  padding: .2rem;
}
.header span:nth-child(3) {
  opacity: 0;
  filter:alpha(opacity=0);
}
.content {
  padding-top: 1.3rem;
}
.container {
  margin: 20px;
}
.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.message {
  text-align: center;
  margin: 20px 0;
  color: #888;
}
.message span:last-child {
  margin-left: 10px;
}
.container img {
  width: 100%;
  margin-bottom: 20px;
}
.news-content {
  font-size: 18px;
  line-height: 30px;
}
</style>























