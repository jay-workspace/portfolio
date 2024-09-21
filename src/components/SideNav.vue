<template>
  <n-layout-sider class="side-nav">
    <div class="side-nav__items">
      <div>
        <n-avatar
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
          :dropdown-placement="right"
          class="side-nav__items__menu"
        />
      </div>
    </div>
  </n-layout-sider>
</template>
<script>
import { defineComponent  } from "vue";

const menuOptions = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Experience",
    key: "experience",
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
  },
  {
    label: "Education",
    key: "education",
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
  },
];

export default defineComponent({
  setup() {
    return {
      menuOptions,
      defaultExpandedKeys: ["fish", "braise"]
    };
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

    &__name {
      margin-top: 1rem;
      font-size: 2.5rem;
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
    }
  }
}
</style>
