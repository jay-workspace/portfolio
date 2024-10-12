<template>
  <n-layout>
    <intro-page ref="introPage" class="page-basic"/>
    <experience-page :goToCompany="selectedCompany" ref="wipro" class="page-basic"/>
    <n-layout-content content-style="padding: 24px;">
      {{ moveToPage }}
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
    moveToPage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedCompany:'',
      experiences: ['wipro', 'usa', 'india']
    }
  },
  watch: {
    moveToPage(newValue, oldValue) {
      console.log('Prop value changed from', oldValue, 'to', newValue);
      if(this.experiences.includes(newValue)) {
        this.selectedCompany = newValue
      }
      else {
        this.scrollTo(newValue);
      }
    }
  },
  methods: {
    scrollTo(sectionId) {
      const sectionElement = this.$refs[sectionId];
      // const targetOffset = sectionElement.$el.offsetTop;
      if (sectionElement && sectionElement.$el) {
        sectionElement.$el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      } else {
        console.error(`Section with ID '${sectionId}' not found.`);
      }
    }
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
