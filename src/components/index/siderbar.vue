<template>
  <div>
    <div class="mask" @click="hideSiderbar"></div>
    <transition name="fade">
      <div class="self-info" v-if="showLogin">
         <div class="self-content" v-show="showContent">
          <div class="content-header">
            <div class="avator"><img src="../../assets/avator.jpg" alt=""></div>
            <span>Progress is not created by contented people.</span>
          </div>
          <div class="self-center">
            <ul>
              <router-link to="/collection"><li><img src="../../assets/collection.png" alt=""><span>我的收藏</span></li></router-link>
              <li><img src="../../assets/history.png" alt=""><span>浏览历史</span></li>
              <router-link to="/selfInfo"><li><img src="../../assets/info.png" alt=""><span>个人中心</span></li></router-link>
              <li @click="cancel"><img src="../../assets/cancel.png" alt=""><span>注销</span></li>
            </ul>
          </div>
         </div>
         <div class="login" v-show="showLoginCenter">
          <div class="login-content">
            <input type="text" placeholder="请输入用户名">
            <input type="password" placeholder="请输入密码">
            <button @click="clickLogin">登录</button>
            <div class="register">
              <span>立即注册</span>
              <span>忘记密码</span>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
    export default{
        data() {
          return {
            showContent : true,
            showLoginCenter : false
          }
        },
        created() {
          this.$store.commit('showLogin',false)
        },
        methods: {
          hideSiderbar() {
            this.$store.commit('showSiderbar',false)
            this.$store.commit('showLogin',false)
          },
          cancel() {
            this.showContent = false
            this.showLoginCenter = true
          },
          clickLogin() {
            this.showContent = true
            this.showLoginCenter = false
          }
        },
        computed: {
            showLogin() {
                return this.$store.state.showLogin
            }
        }
    }
</script>

<style>
.mask, .login {
  position: fixed;
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.8);
  z-index: 101;
}
.self-info {
  position: fixed;
  top: 0;
  left: 0;
  right: 3rem;
  bottom: 0;
  background-color: #fff;
  z-index: 101;
  display: flex;
  justify-content: center;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
}
.fade-enter {
  transform: translateX(-100%);
}
.fade-leave {
  transform: translateX(100%);
}
.self-content, .login {
  width: 70%;
  height: 100%;
}
.content-header {
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: .5rem;
  color: #ccc;
}
.avator{
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: .3rem;
}
.self-center {
  margin-top: .8rem;
  font-size: .4rem;
  color: #404040;
}
.self-center ul li {
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  border-bottom: 1px solid #ccc;
}
.self-center img {
  width: .6rem;
  height: .6rem;
  vertical-align: middle;
  margin-right: .8rem;
}
.self-center a {
  color: #000;
}
.login {
  background-color: #fff;
}
.login-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.33rem;
}
.login-content input {
  width: 80%;
  height: 1rem;
  margin-bottom: .5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #888;
}
.login-content button {
  width: 80%;
  height: 1rem;
  font-size: .4rem;
  letter-spacing: 10px;
  border: 1px solid #0994ec;
  border-radius: 3px;
  background-color: #0994ec;
  color: #fff;
}
.register {
  width: 90%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;;
  font-size: .3rem;
  margin:10px;
}
.register span:last-child {
  color: #07a0ec;
}
</style>



























