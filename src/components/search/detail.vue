<template>
  <div class="detail">
    <div class="header">
      <img src="../../assets/back.png" @click="goback">
      <span>新闻详情</span>
      <span>新闻</span>
    </div>
    <div class="content">
      <div class="container">
        <div class="title">{{$route.params.item.title}}</div>
        <div class="message">
          <span>{{$route.params.item.time}}</span>
          <span>{{$route.params.item.src}}</span>
        </div>
        <div class="news-content" v-html="$route.params.item.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
        methods: {
            goback() {
                this.$router.back(-1)
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
  background-color: #0994ec;
  font-size: 16px;
  color: #fff;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
}
.header span:last-child {
  opacity: 0;
  filter: opacity(0);
}
.header img {
  width: 25px;
  height: 25px;
  padding: .2rem;
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




















































