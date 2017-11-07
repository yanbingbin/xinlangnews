<template>
	<div>
    <div class="search">
      <div class="header">
        <img src="../../assets/back.png" alt="">
        <span>搜索</span>
        <span>隐藏</span>
      </div>
      <div class="search-content">
        <input type="text" placeholder="请输入搜索内容" v-model="keywords"
        @keyup.enter="toSearch(keywords)">
      </div>
    </div>
    <div class="news-content">
      <div class="loading" v-show="isLoading">
        <img src="../../assets/loading.svg" alt="">
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
   data () {
     return {
       result: '',
       keywords: '',
       isLoading: false
     }
   },
   methods: {
     toSearch (keywords) {
       if (keywords !== '') {
         this.isLoading = true
         this.result = ''
         if (keywords.trim()) {
           this.$http.get('/api/search?keyword=' + keywords + '&appkey=' + 'appkey=1353b251727262fb')
             .then(res => {
               this.result = res.data.result.list
             })
             .then(() => {
               this.isLoading = false
             })
         }
       }
     },
     goback () {
       this.$router.back(-1)
     },
     toSearchDetail (item) {
       this.$router.push({name: 'searchDetail', params: { item : item }})
     }
   }
 }
</script>

<style scoped>
.search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.header {
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
.search-content {
  width: 100%;
  height: 1rem;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-content input {
  width: 96%;
  height: 26px;
  border-radius: 4px;
  border: #ccc;
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
