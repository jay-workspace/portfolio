<template>
  <n-layout>
    <intro-page class="page-basic"/>
    <experience-page class="page-basic"/>
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
import IntroPage from './pages/IntroPage.vue'

export default {
  name: 'MainBody',
  components: {
    'experience-page': ExperiencePage,
    'intro-page': IntroPage
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
.page-basic {
  min-height: 100%;
}
</style>
