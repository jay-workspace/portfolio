<template>
  <n-layout-sider class="side-nav">
    <div class="side-nav__items">
      <n-avatar
        round
        :size="225"
        src="https://media.licdn.com/dms/image/v2/C5603AQE1ypfbhnovMw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1572559162461?e=1732147200&v=beta&t=vOftRUEhQHMOXTQ9WiGfR_eGGpO7FTBPvUuWWWzYXKo"
      />
    </div>
  </n-layout-sider>
</template>

<script>

export default {
  name: 'SideNav',
}
</script>

<style lang="scss">
@import '../assets/syles/color.scss';

.side-nav {
  background-color: $side-nav-color;
  min-width: 40vh;
  margin: 0.5rem;
  border-radius: 0.5rem;
  
  &__items {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }
}
</style>
