<template>
  <view class="animations">
    <view class="radar">
      <view class="dot dot-1"></view>
      <view class="dot dot-2"></view>
      <view class="dot dot-3"></view>
      <view class="cover"></view>
    </view>
  </view>
</template>

<script>
export default {
  name: "loading-radar",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
$size: 180rpx;
$dotSize: 4rpx;
$maincolor: #2da3f6;

.radar {
  position: relative;
  z-index: 1;
  height: $size;
  width: $size;
  background: -webkit-repeating-radial-gradient(
    rgba(45, 163, 246, 0) 0%,
    rgba(45, 163, 246, 0) 23%,
    rgba(45, 163, 246, 0.7) 24%,
    rgba(45, 163, 246, 0) 25%
  );
  margin: 0 auto;
  border-radius: 50%;
  border: 2rpx solid rgba(45, 163, 246, 0.7);
  overflow: hidden;
}

.radar::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: $dotSize;
  height: $dotSize;
  background: $maincolor;
  margin-left: -1rpx;
  margin-top: -1rpx;
  border-radius: 1rpx;
}

.dot {
  position: absolute;
  width: $dotSize;
  height: $dotSize;
  background: $maincolor;
  opacity: 0;
  border-radius: 50%;
  animation: breath 3s linear infinite;
  box-shadow: 0 0 2rpx 2rpx rgba(45, 163, 246, 0.5);
}

.dot-1 {
  top: 50rpx;
  left: 30rpx;
  animation-delay: 1s;
}

.dot-2 {
  top: 60rpx;
  right: 20rpx;
  animation-delay: 0.2s;
}

.dot-3 {
  top: 140rpx;
  right: 100rpx;
  animation-delay: 2.3s;
}

.cover {
  transform-origin: bottom right;
  border-right: 1rpx solid $maincolor;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0) 45%,
    $maincolor 100%
  );
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  animation: rotation 3s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes breath {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  20% {
    opacity: 1;
  }

  40% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}
</style>
