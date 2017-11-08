<template>
  <div class="container">
    <div class="msg-header">
      <img src="../../assets/back.png" @click="goback">
      <span>个人中心</span>
      <span>隐藏</span>
    </div>
    <div class="msg">
      <h2>颜秉斌</h2>
      <div class="target">
        <h3>求职意向</h3>
        <p>web前端实习生</p>
      </div>
      <div class="background">
        <p>个人信息</p>
        <p>学校: 宜春学院</p>
        <p>专业: 网络工程(本科)</p>
        <p>电话: 13372534905</p>
      </div>
    </div>
    <div class="production">
      <div class="pro">
        <div class="top">
          <img src="../../assets/jishu.png" alt="">
          <p class="pro_1">技术栈</p>
        </div>
        <div class="bottom">
          <p class="tech">【前端】Vue.js、CSS/CSS3、HTML/HTML5、JavaScript(ES6、ES5)、stylus、微信小程序</p>
          <p class="tech">【自动化构建】Webpack</p>
          <p class="tech">【版本管理】Git</p>
        </div>
        <div class="selfInfo">
          <p> &nbsp &nbsp&nbsp &nbsp我是一个网络工程专业的学生，在校学习了多门编程语言，本人爱好编程。有着较强的学习能力
            ，喜欢逛技术网站，爱好新技术，有良好的团队协作能力和沟通能力，希望找到一个喜欢的公司，为公司的发展添砖加瓦。！
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
        name: 'showMsg',
        methods: {
          goback() {
              this.$router.back(-1)
          }
        }
    }
</script>

<style scoped>
.msg-header {
  width: 100%;
  height: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0994ec;
  font-size: 16px;
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 99;
}
.msg-header span:last-child {
  opacity: 0;
}
img {
  width: 25px;
  height: 25px;
  padding: 0 .2rem;
}
.msg {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 50px;
  background-color: #fbfbfb;
}
p {
  margin-top: 5px;
}
h2 {
  font-size: 18px;
}
h3 {
  font-size: 16px;
}
.background {
  flex: 2;
}
.production {
  flex: 3;
  height: 480px;
  display: flex;
  flex-direction: column;
  color: #000;
  font-size: 10px;
}
.pro {
  flex: 4;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #CDCDCD;
}
.top {
  display: flex;
  color: #f00;
  height: 25px;
}
.bottom {
  padding: 8px 5px;
}

</style>








































