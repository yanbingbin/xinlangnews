<template>
  <div>
    <v-header></v-header>
    <v-nav></v-nav>
    <v-siderbar v-show="showSiderbar"></v-siderbar>
  </div>
</template>

<script>
    import vHeader from '@/components/index/header'
    import vNav from '@/components/index/nav'
    import vSiderbar from '@/components/index/siderbar'
    export default{
        created() {
          this.$store.commit('showSiderbar',false)
        },
        components: {
          vHeader,
          vNav,
          vSiderbar
        },
        computed: {
            showSiderbar() {
                return this.$store.state.showSidebar
            }
        }
    }
</script>

<style scoped>
</style>
