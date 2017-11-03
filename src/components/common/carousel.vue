<template>
  <div class="carousel">
    <transition-group tag="ul" name="image" class="clear">
      <li v-for="(item,index) in slides" :key="index" v-show="index === nowIndex">
        <img :src="item.src" alt="">
      </li>
    </transition-group>
    <div class="bullet">
      <span v-for="(item,index) in slides.length" :class="{active:index === nowIndex}"></span>
    </div>
  </div>
</template>

<script>
    export default{
        data() {
          return {
            nowIndex:0,
            slides: [
              {src: require('../../assets/zho8-fynhhay9432966.jpg')},
              {src: require('../../assets/Yfa5-fynfvff4786196.jpg')},
              {src: require('../../assets/-pLW-fynfvar5212691.jpg')},
              {src: require('../../assets/jAV0-fynfvar5212781.jpg')},
            ]
          }
        },
        created() {
          this.play()
        },
        methods: {
          autoPlay() {
            this.nowIndex++
            if(this.nowIndex === this.slides.length) {
                this.nowIndex = 0
            }
          },
          play() {
              setInterval(this.autoPlay,2000)
          }
        }
    }
</script>

<style scoped>
  .carousel {
    margin-bottom: 5.6rem;
  }
  .carousel,ul,li {
    width: 100%;
  }
  li {
    position: absolute;
  }
  li img {
    width: 100%;
    height: 5.33rem;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
  .bullet {
    width: 100%;
    position: absolute;
    top: 7rem;
    margin: 0 auto;
    text-align: right;
    z-index: 1;
  }
  .bullet span {
    width: .3rem;
    height: .3rem;
    border: 1px solid #000;
    margin-right: .3rem;
    border-radius: .3rem;
    display: inline-block;
  }
  .active {
    background-color: #0994ec;
  }
  .clear{
    content: '';
    overflow: hidden;
    clear: both;
    display: block;
  }
</style>
