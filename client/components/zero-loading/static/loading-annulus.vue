<template>
  <view class="animations">
    <view class="loader" :style="{ '--color': color }"></view>
  </view>
</template>

<script>
export default {
  name: "loading-annulus",
  props: {
    color: {
      type: String,
      default: "#0396FF",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.loader {
  width: 60px;
  height: 60px;
}

.loader::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border-top: 2px solid var(--color);
  border-right: 2px solid transparent;
  animation: spinner 1s linear infinite;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
