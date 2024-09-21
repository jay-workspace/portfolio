<template>
  <n-layout has-sider class="main__layout">
    <div class="main">
      <side-nav />
      <main-body />
  </div>
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
  font-family: 'Ramaraja';
  color: white;
}

body {
  margin: 0;
  padding: 0;
  background-color: $base-color;
}

.n-layout-scroll-container {
  height: inherit !important;
}

.main{
  display: flex;
  &__layout {
    display: flex;
    min-height: inherit; 
  }
}
</style>
