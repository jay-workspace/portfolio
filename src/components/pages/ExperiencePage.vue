<template>
  <n-timeline size="large" class="experience-page">
    <n-timeline-item>
      <n-card class="experience-page__card" title="Software Developer at Wipro Technologies">
        <template #header-extra>
          Jan 2014 - Mar 2016
        </template>
        <p>- Developed a new tool for maintaining the efforts of all bench employees.</p>
        <p>- Migrated a banking application to latest version of JAVA and Spring Security.</p>
        <p>- Updated an existing admin Singapore Insurance tool to latest UI technology Angular JS.</p>
      </n-card>
      <template #icon>
        <n-icon class="experience-page__icon">
          <img :src="WiproIcon" alt="Icon" class="experience-page__icon-wipro">
        </n-icon>
      </template>
    </n-timeline-item>
    <n-timeline-item
      type="success"
    >
      <n-card class="experience-page__card" title="Software Engineer Intern at ShipBob, Inc.">
        <template #header-extra>
          Jan 2018 - May 2018
        </template>
        <p>- Developed an algorithm to figure out the shortest path to travel in the warehouse to fulfill the orders using the bin formula.</p>
        <p>- Enhanced the inventory management system and improved the maintainability of the application. Technologies used were Vue.js, JavaScript and .Net Entity framework.</p>
      </n-card>
      <template #icon>
        <n-icon class="experience-page__icon">
          <img :src="ShipBobIcon" alt="Icon" class="experience-page__icon-wipro">
        </n-icon>
      </template>
    </n-timeline-item>
    <n-timeline-item
      type="error"
    >
      <n-card class="experience-page__card" title="Senior Software Engineer at ShipBob, Inc.">
        <template #header-extra>
          Dec 2018 - Nov 2022
        </template>
        <p>- Developed an algorithm to figure out the shortest path to travel in the warehouse to fulfill the orders using the bin formula.</p>
        <p>- Enhanced the inventory management system and improved the maintainability of the application. Technologies used were Vue.js, JavaScript and .Net Entity framework.</p>
      </n-card>
      <template #icon>
        <n-icon class="experience-page__icon">
          <img :src="ShipBobIcon" alt="Icon" class="experience-page__icon-wipro">
        </n-icon>
      </template>
    </n-timeline-item>
    <n-timeline-item
      line-type="dashed"
    >
      <n-card class="experience-page__card" title="Software Engineer III at ShipBob India Pvt. Ltd.">
        <template #header-extra>
          Dec 2022 - Current
        </template>
        <p>- Developed an algorithm to figure out the shortest path to travel in the warehouse to fulfill the orders using the bin formula.</p>
        <p>- Enhanced the inventory management system and improved the maintainability of the application. Technologies used were Vue.js, JavaScript and .Net Entity framework.</p>
      </n-card>
      <template #icon>
        <n-icon class="experience-page__icon">
          <img :src="ShipBobIcon" alt="Icon" class="experience-page__icon-wipro">
        </n-icon>
      </template>
    </n-timeline-item>
    <n-timeline-item class="experience-page__last" />
  </n-timeline>
</template>

<script>

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.experience-page__card');
  const icons = document.querySelectorAll('.experience-page__icon');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
        entry.target.classList.add('zoom-in');
      } else {
        entry.target.classList.remove('slide-in');
        entry.target.classList.remove('zoom-in');
      }
    });
  }, { threshold: 0.3 });

  cards.forEach(card => {
    observer.observe(card);
  });

  icons.forEach(icon => {
    observer.observe(icon);
  });
});

import { defineComponent } from "vue";
import WiproIcon from "../icons/experience-wipro.svg"
import ShipBobIcon from "../icons/experience-shipbob.svg"

export default defineComponent({
  data() {
    return {
      WiproIcon,
      ShipBobIcon
    };
  },
});
</script>

<style lang="scss">
@import '../../assets/syles/color';
@import '../pages/styles/ExperiencePage.scss';
</style>