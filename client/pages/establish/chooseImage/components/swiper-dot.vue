<template>
  <view class="dot-main">
    <view
      :class="['dot-item']"
      :style="current == index ? { background: indicatorActiveColor } : { background: indicatorInactiveColor }"
      v-for="(item, index) in list"
      :key="index"
    ></view>
  </view>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  },
  current: {
    type: [String, Number],
    default: 0
  },
  indicatorActiveColor: {
    type: String,
    default: '#000'
  },
  indicatorInactiveColor: {
    type: String,
    default: '#cdcdcd'
  }
});

</script>

<style scoped lang="scss">
.dot-main {
  margin-top: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dot-item {
  width: 16rpx;
  height: 16rpx;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 6rpx;
  box-sizing: border-box;
}
</style>
