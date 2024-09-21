<template>
  <n-layout-sider class="side-nav">
    <div class="side-nav__items">
      <div class="side-nav__items__dp-area">
        <n-avatar
          class="side-nav__items__dp"
          round
          :size="225"
          src="https://media.licdn.com/dms/image/v2/C5603AQE1ypfbhnovMw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1572559162461?e=1732147200&v=beta&t=vOftRUEhQHMOXTQ9WiGfR_eGGpO7FTBPvUuWWWzYXKo"
        />
      </div>
      <div class="side-nav__items__name">Jayavijay Jayavelu</div>
      <div class="side-nav__items__title">Full Stack Developer</div>
      <div>
        <n-menu
          v-model:value="activeKey"
          :root-indent="36"
          :indent="12"
          :options="menuOptions"
          class="side-nav__items__menu"
        />
      </div>
    </div>
  </n-layout-sider>
</template>
<script>

import { defineComponent, h } from "vue";
import { 
  HomeOutline, 
  SchoolOutline, 
  BusinessOutline, 
  MailUnreadOutline, 
  ConstructOutline 
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'

export default defineComponent({
  data() {
    return {
      HomeOutline,
      SchoolOutline,
      BusinessOutline,
      MailUnreadOutline,
      ConstructOutline,
      menuOptions: [
        { 
          label: "Home",
          key: "home",
          icon: this.renderIcon(HomeOutline),
        },
        {
          label: "Experience",
          key: "experience",
          icon: this.renderIcon(BusinessOutline),
          children: [
            {
              label: "Wipro",
              key: "wipro"
            },
            {
              label: "ShipBob, Inc.",
              key: "shipbob",
              children: [
                {
                  label: "U.S.A",
                  key: "usa"
                },
                {
                  label: "India",
                  key: "india"
                },
              ]
            }
          ]
        },
        {
          label: "Skills",
          key: "skills",
          icon: this.renderIcon(ConstructOutline),
        },
        {
          label: "Education",
          key: "education",
          icon: this.renderIcon(SchoolOutline),
          children: [
            {
              label: "Master's",
              key: "masters"
            },
            {
              label: "Bachelor's",
              key: "bachelors"
            }
          ]
        },
        {
          label: "Contact",
          key: "contact",
          icon: this.renderIcon(MailUnreadOutline),
        },
      ]
    };
  },
  setup() {
    return {
      defaultExpandedKeys: ["fish", "braise"]
    };
  },
  methods: {
    renderIcon(icon) {
      return () => h(NIcon, null, { default: () => h(icon) });
    }
  }
});
</script>

<style lang="scss">
@import '../assets/syles/color.scss';
@import '../components/styles/SideNav.scss';
</style>
