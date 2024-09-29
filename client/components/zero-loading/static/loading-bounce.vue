<template>
  <view class="animations">
    <view class="box">
      <view class="dot dot1"></view>
      <view class="dot dot2"></view>
      <view class="dot dot3"></view>
    </view>
  </view>
</template>

<script>
export default {
  name: "loading-bounce",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100rpx;
  height: 50rpx;
  position: relative;
}
.dot {
  width: 14rpx;
  height: 14rpx;
  background: #007aff;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 5rpx);
}

.dot1 {
  background: #1fa2ff;
  left: 0rpx;
  -webkit-animation: bounce 0.5s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate
    infinite;
  animation: bounce 0.5s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
}

.dot2 {
  background: #12d8fa;
  left: 40rpx;
  -webkit-animation: bounce 0.5s 0.2s cubic-bezier(0.77, 0.47, 0.64, 0.28)
    alternate infinite;
  animation: bounce 0.5s 0.2s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate
    infinite;
}

.dot3 {
  background: #29ffc6;
  left: 80rpx;
  -webkit-animation: bounce 0.5s 0.4s cubic-bezier(0.77, 0.47, 0.64, 0.28)
    alternate infinite;
  animation: bounce 0.5s 0.4s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate
    infinite;
}

@-webkit-keyframes bounce {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(-20rpx);
    transform: translateY(-20rpx);
  }
}

@keyframes bounce {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(-20rpx);
    transform: translateY(-20rpx);
  }
}
</style>
