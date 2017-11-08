<template>
  <div>
    <div class="header">
      <img src="../../assets/back.png" @click="goback">
      <span>收藏</span>
      <span>隐藏</span>
    </div>
    <div class="news-content">
      <div class="section" v-for="(item, index) in result">
        <div class="delete" @click="deleteCollection(item,index)">
          <img src="../../assets/delete.png" >
        </div>
        <div class="news" @click="toDetail(item, index)">
          <div class="news-left">
            <img :src="item && item.pic || require('../../assets/notFoundImg.jpg')" alt="">
          </div>
          <div class="news-right">
            <div class="news-title">{{item && item.title}}</div>
            <div class="news-message">
              <span>{{item && item.time}}</span>
              <span>{{item && item.src}}</span>
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
    result () {
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
      this.$router.push({name: 'collectionDetail', params: {item : item, index : index}})
    },
    deleteCollection (item, index) {
      this.$store.state.collection.splice(index, 1)
    }
  }
}
</script>

<style scoped>
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
    margin-top: 1.33rem;
  }

  .section {
    width: 94%;
    height: 4.3rem;
    margin: .3rem auto;
  }
  .delete {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .delete img {
    width: .5rem;
    height: .5rem;
  }
  .news {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: .12rem;
  }
  .news-left {
    width: 30%;
    height: 90%;
    display: inline-block;
  }
  .news-left img {
    width: 100%;
    height: 100%;
  }
  .news-right {
    display: inline-block;
    width: 64%;
    height: 90%;
    margin-left: .21rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .news-title {
    width: 100%;
    height: 54%;
    overflow: hidden;
    font-size: 18px;
    color: #404040;
  }
  .news-message {
    width: 100%;
    height: 36%;
    font-size: 14px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: #888;
  }
</style>

























