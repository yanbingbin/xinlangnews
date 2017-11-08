<template>
  <div>
    <div class="header">
      <img @click="backIndex" src="../../assets/back.png" alt="">
      <span>频道管理</span>
      <span class="hide">布局</span>
    </div>
    <div class="content">
      <div class="delete">
        <div class="title delete-title">点击删除频道</div>
        <ul>
          <li v-for="(channel,index) in channels" @click="deleteChannel(channel,index)" class="channel-item" >{{channel}}</li>
        </ul>
      </div>
      <div class="add">
        <div class="title add-title">点击添加频道</div>
        <ul>
          <li v-for="(channel,index) in deleteChannelArr" @click="addChannel(channel,index)">{{channel}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
        return {
          deleteChannelArr: [] // 被删除的列表
        }
    },
    computed: {
      channels() {
          return this.$store.state.channels
      }
    },
    methods: {
      backIndex() {
        this.$router.push('./')
        this.$store.dispatch('getNews','头条')
        this.$store.state.load = true
        this.$store.state.activeIndex = 0
      },
      deleteChannel(channel,index) {
        if(this.$store.state.channels.length > 1) {
          this.$store.commit('decrementChannels',index)
          this.deleteChannelArr.push(channel)
        }
      },
      addChannel(channel,index) {
        this.$store.commit('incrementChannels',channel)
        this.deleteChannelArr.splice(index,1)
      }
    }
  }
</script>

<style scoped>
.header {
  width: 100%;
  height: 1.33rem;
  background-color: #0994ec;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header img {
  width: 25px;
  height: 25px;
  padding-left: .2rem;
}
.header .hide {
  opacity: 0;
}
.content {
  background-color: #f8f8f8;
}
.content .title {
  padding: 6px 0 10px 6px;
  color: #666;
  font-size: 12px;
}
.content li {
  display: inline-block;
  width: 2rem;
  height: .9rem;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin: .15rem .22rem;
  line-height: .9rem;
  text-align: center;
  font-size: 16px;
}
</style>














