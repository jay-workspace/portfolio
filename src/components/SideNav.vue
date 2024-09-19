<template>
  <n-layout-sider class="side-nav">
    Handian Bridge
  </n-layout-sider>
</template>

<script>
export default {
  name: 'SideNav',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
@import '../assets/syles/color.scss';

.side-nav {
  background-color: $side-nav-color;
}
</style>
