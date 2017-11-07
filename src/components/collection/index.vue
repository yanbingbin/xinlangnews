<template>
  <div>
    <div class="header">
      <img src="../../assets/back.png" alt="">
      <span>收藏</span>
      <span>隐藏</span>
    </div>
    <div class="news-content">
      <div class="loading" v-show="isLoading">
        <img src="../../assets/loading.svg" @click="goback">
      </div>
      <div class="section" v-for="(item, index) in result">
        <div class="news">
          <div class="news-left">
            <img :src="item.pic" alt="">
          </div>
          <div class="news-right">
            <div class="news-title">{{item.title}}</div>
            <div class="news-message">
              <span>{{item.time}}</span>
              <span>{{item.src}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    collectionNews () {
      if(this.$store.state.collection) {
        return this.$store.state.collection
      }
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    toDetail (item, index) {
      this.$router.push({name: 'collectDetail', params: {item : item, index : index}})
    },
    deleteCollection (item, index) {
      this.$store.state.collection.splice(index, 1)
    }
  },
  computed: {

  }
}
</script>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1.33rem;
    background-color: #07a0ec;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
  .header img {
    width: 25px;
    height: 25px;
    padding-left: .15rem;
  }
  .header span:nth-child(3) {
    opacity: 0;
  }

  .news-content {
    margin-top: 2.5rem;
  }
  .loading {
    position: fixed;
    top: 2.4rem;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    background-color: #fff;
    z-index: 99;
  }
  .loading img {
    width: 50px;
    height: 50px;
    margin-top: 30px;
    animation: loading .6s linear infinite;
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
    background-color:#000;
  }
  .news {
    height: 2.25rem;
    /*box-sizing: border-box;*/
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
    padding-left: 10px;
  }
  .news-right .news-title {
    width: 100%;
    height: 64%;
    color: #404040;
    font-size: 18px;
    overflow: hidden;
  }
  .news-message {
    width: 100%;
    height: 32%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    white-space: nowrap;
  }
</style>

























