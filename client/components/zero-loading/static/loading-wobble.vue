<template>
  <view class="animations">
    <view class="three-body" :style="{ '--color': color }">
      <view class="three-body__dot"></view>
      <view class="three-body__dot"></view>
      <view class="three-body__dot"></view>
    </view>
  </view>
</template>

<script>
export default {
  name: "loading-wobble",
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
$size: 100rpx;
$speed: 1s;
.three-body {
  position: relative;
  display: inline-block;
  height: $size;
  width: $size;
  animation: spin78236 calc($speed * 2.5) infinite linear;
}

.three-body__dot {
  position: absolute;
  height: 100%;
  width: 27%;
}

.three-body__dot:after {
  content: "";
  position: absolute;
  height: 0%;
  width: 100%;
  padding-bottom: 100%;
  background-color: var(--color);
  border-radius: 50%;
}

.three-body__dot:nth-child(1) {
  bottom: 5%;
  left: 0;
  transform: rotate(60deg);
  transform-origin: 50% 85%;
}

.three-body__dot:nth-child(1)::after {
  bottom: 0;
  left: 0;
  animation: wobble1 $speed infinite ease-in-out;
  animation-delay: calc($speed * -0.3);
}

.three-body__dot:nth-child(2) {
  bottom: 5%;
  right: 0;
  transform: rotate(-60deg);
  transform-origin: 50% 85%;
}

.three-body__dot:nth-child(2)::after {
  bottom: 0;
  left: 0;
  animation: wobble1 $speed infinite calc($speed * -0.15) ease-in-out;
}

.three-body__dot:nth-child(3) {
  bottom: -5%;
  left: 0;
  transform: translateX(116.666%);
}

.three-body__dot:nth-child(3)::after {
  top: 0;
  left: 0;
  animation: wobble2 $speed infinite ease-in-out;
}

@keyframes spin78236 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes wobble1 {
  0%,
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }

  50% {
    transform: translateY(-66%) scale(0.65);
    opacity: 0.8;
  }
}

@keyframes wobble2 {
  0%,
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }

  50% {
    transform: translateY(66%) scale(0.65);
    opacity: 0.8;
  }
}
</style>
