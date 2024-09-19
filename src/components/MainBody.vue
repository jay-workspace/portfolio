<template>
  <n-layout>
    <n-layout-header bordered>
      Yiheyuan Road
    </n-layout-header>
    <n-layout-content content-style="padding: 24px;">
      Pingshan Road
    </n-layout-content>
    <n-layout-footer bordered>
      Chengfu Road
    </n-layout-footer>
  </n-layout>
</template>

<script>
export default {
  name: 'MainBody',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.n-layout-header {
  padding: 24px;
}

.n-layout-footer {
  padding: 24px;
}
</style>
