<template>
  <n-layout has-sider>
    <side-nav />
    <main-body />
  </n-layout>
</template>

<script>
import SideNav from './components/SideNav.vue'
import MainBody from './components/MainBody.vue'

export default {
  name: 'App',
  components: {
    'side-nav': SideNav,
    'main-body': MainBody
  }
}
</script>

<style lang="scss">
@import 'assets/syles/_color.scss';

#app {
  min-height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  background-color: $base-color;
}
</style>
