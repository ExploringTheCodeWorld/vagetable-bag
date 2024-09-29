<template>
  <view class="animations">
    <view class="box" :style="{ '--color': color }">
      <view class="pulse-bubble pulse-bubble-1"></view>
      <view class="pulse-bubble pulse-bubble-2"></view>
      <view class="pulse-bubble pulse-bubble-3"></view>
    </view>
  </view>
</template>

<script>
export default {
  name: "loading-pulse",
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
.box {
  width: 100rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pulse-bubble {
  width: 16rpx;
  height: 16rpx;
  border-radius: 50%;
  background: var(--color);
}

.pulse-bubble-1 {
  // background: #1fa2ff;
  animation: pulse 0.4s ease 0s infinite alternate;
}

.pulse-bubble-2 {
  // background: #12d8fa;
  animation: pulse 0.4s ease 0.2s infinite alternate;
}

.pulse-bubble-3 {
  // background: #29ffc6;
  animation: pulse 0.4s ease 0.4s infinite alternate;
}

@keyframes pulse {
  from {
    opacity: 1;
    transform: scale(1);
  }

  to {
    opacity: 0.25;
    transform: scale(0.75);
  }
}
</style>
