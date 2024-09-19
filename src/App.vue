<template>
  <side-nav />
  <main-body />
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
