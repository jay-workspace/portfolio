<template>
  <n-layout>
    <experience-page/>
    <n-layout-content content-style="padding: 24px;">
      Pingshan Road
    </n-layout-content>
    <n-layout-footer bordered>
      Chengfu Road
    </n-layout-footer>
  </n-layout>
</template>

<script>
import ExperiencePage from './pages/ExperiencePage.vue' 

export default {
  name: 'MainBody',
  components: {
    'experience-page': ExperiencePage,
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
.n-layout-header {
  padding: 24px;
}
.n-layout {
  height: 100vh;
}
.n-layout-footer {
  padding: 24px;
}
</style>
