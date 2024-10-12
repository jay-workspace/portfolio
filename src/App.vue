<template>
  <n-layout has-sider class="main__layout">
    <div class="main">
      <side-nav @sideNavSelect="moveToPage"/>
      <main-body :moveToPage="redirectToPage"/>
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
  },
  data() {
    return {
      redirectToPage: 'IntroPage'
    };
  },
  methods: {
    moveToPage(data) {
      console.log('this is from app body ', this.redirectToPage)
      this.redirectToPage = data
      console.log('this is from app body 2', this.redirectToPage)
    },
  },
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
  min-width: 100vh;
}

.main{
  display: flex;
  &__layout {
    min-height: inherit; 
    display: block;
    .n-layout-scroll-container {
      display: block !important;
    }
  }
}
</style>
