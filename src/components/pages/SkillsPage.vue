<template>
  <n-page-header>
    <template #title>
      CORE COMPETENCIES
    </template>
  </n-page-header>
  <div class="skills-page">
    <n-grid x-gap="12" :cols="3">
      <n-gi>
        <icon-card :src="CodingIcon" :msg="Test"/>
      </n-gi>
      <n-gi>
        <icon-card :src="WebDesignIcon" :msg="Test"/>
      </n-gi>
      <n-gi>
        <icon-card :src="FrameworkIcon" :msg="Test"/>
      </n-gi>
    </n-grid>
    <n-grid x-gap="12" :cols="2" class="skills-page__second-row">
      <n-gi>
        <icon-card :src="AzureIcon" :msg="Test"/>
      </n-gi>
      <n-gi>
        <icon-card :src="ArchitectureIcon" :msg="Test"/>
      </n-gi>
    </n-grid>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import IconCard from "../generic/IconCard.vue";
import CodingIcon from "../icons/coding-language.png"
import WebDesignIcon from "../icons/web-design.png"
import FrameworkIcon from "../icons/framework.png"
import AzureIcon from "../icons/azure.png"
import ArchitectureIcon from "../icons/architecture.png"

export default defineComponent({
  name: 'SkillsPage',
  props: {
    goToCompany: {
      type: String,
      required: true,
    },
  },
  components: {
    "icon-card": IconCard
  },
  data() {
    return {
      CodingIcon,
      WebDesignIcon,
      FrameworkIcon,
      AzureIcon,
      ArchitectureIcon
    };
  },
  watch: {
    goToCompany(newValue, oldValue) {
      console.log('Prop value changed from', oldValue, 'to', newValue);
      this.scrollTo(newValue);
    }
  },
  methods: {
    scrollTo(sectionId) {
      const sectionElement = this.$refs[sectionId];
      if (sectionElement && sectionElement.$el) {
        const targetOffset = sectionElement.$el.getBoundingClientRect().left + window.scrollX;
        sectionElement.$el.scrollTo({
          behavior: 'auto',
          block: 'center',
          inline: targetOffset
        });
      } else {
        console.error(`Section with ID '${sectionId}' not found.`);
      }
    }
  }
});
</script>

<style lang="scss">
@import '../../assets/syles/color';
@import '../pages/styles/SkillsPage.scss';

</style>