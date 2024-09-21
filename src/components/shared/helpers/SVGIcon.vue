<template>
  <svg
    :width="width"
    :height="height"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      :d="pathData"
      :stroke="stroke"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    width: {
      type: String,
      default: "24",
    },
    height: {
      type: String,
      default: "24",
    },
    fill: {
      type: String,
      default: "none",
    },
    stroke: {
      type: String,
      default: "#000", // Default stroke color
    },
    pathData: {
      type: String,
      required: true, // The `d` attribute data for the <path> element
    },
  },
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: middle;
}
</style>