<template>
  <div class="icon-card">
    <div class="icon-card__icon">
      <img :src="src" alt="Icon" class="no-green-bg"/>
    </div>
    <div class="icon-card__msg"> 
      {{msg}}
    </div>
  </div>
</template>
<script>
export default {
  name: "IconCard",
  props: {
    src: {
      type: String,
      required: true,
    },
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
@import '../../assets/syles/color';

.icon-card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &__icon {
    margin-top: -15rem;
    position: absolute;
    background-color: $icon-card-icon;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 0.1rem solid $main-page-font-color !important;
  }

  &__msg {
    height: 15rem;
    width: 15rem;
    background-color: $icon-card-msg;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.6);
    border: 0.1rem solid $main-page-font-color !important;
    border-radius: 0.5rem;
  }
}

.no-green-bg {
  background-color: transparent;
  top: -30px;
  left: 50%;
  width: 60px;
  height: auto;
}
</style>