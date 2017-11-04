<template>
  <div>
    <v-header></v-header>
    <v-nav></v-nav>
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
        methods: {}
    }
</script>

<style>

</style>
