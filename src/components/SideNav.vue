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

* {
  color: $base-color;
}

.side-nav {
  background-color: $side-nav-color;
  min-width: 40vh;
  margin: 0.5rem;
  border-radius: 0.5rem;
  
  &__items {
    align-items: center;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;

    &__dp {
      transform: translate(-2.5%,-2.5%);
      animation: floater 5s infinite linear;
      //transition: ease 0s;
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      border: 5px $base-color solid;
    }

    @keyframes floater {
      0% { 
        transform: rotate(0deg) 
        translateY(0.25rem) 
        rotate(0deg); 
      } 

      100% { 
        transform: rotate(360deg)  
        translateY(0.25rem) rotate(-360deg); 
      } 
    }

    &__dp-area {
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
      
    }

    &__name {
      margin-top: 1rem;
      font-size: 2.25rem;
      font-weight: 700;
      color: $base-color;
      text-decoration: underline;
    }

    &__title {
      margin-top: 0.25rem;
      font-size: 1.5rem;
      color: $base-color;
    }

    &__menu {
      margin-top: 0.5rem;
      font-size: 1.25rem;
      color: $base-color;
      min-width: 15rem;

      .n-menu-item-content-header {
        color: $base-color !important;
      }

      .n-menu-item-content-header:hover {
        color: $side-nav-color !important;
        font-size: 1.75rem;
      }

      .n-icon:hover {
        color: $side-nav-color !important;
        font-size: 1.75rem;
      }
    }
  }
}
</style>
