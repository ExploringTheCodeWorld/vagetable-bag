<template>
	<view>
		<u-navbar title="智能体形象" bgColor="#f5f5f5" :placeholder="true" :safeAreaInsetTop="true">
			<template #left>
				<view class="close-icon" @click="closeClickHandler">
					<image class="image" src="/static/images/establish/drak-close.png" mode=""></image>
				</view>
			</template>
		</u-navbar>
		<view class="content-wrap">
			<view class="image-bg" v-if="dataList.length == 0">
				<image class="image" src="/static/images/establish/bg.png" mode=""></image>
				<view class="image-bg__loading">
					<zero-loading type="pulse" position="absolute"></zero-loading>
				</view>
				<view class="image-bg__text" >生成中 {{counter}}%</view>
			</view>
			<view v-else>
				<u-swiper
					height="75vh"
					:autoplay="false"
					:list="dataList"
					keyName="url"
					@change="swiperChange"
					@click="swiperClick"
					:current="current"
					imgMode="scaleToFill"
				></u-swiper>
				<swiper-dot :list="dataList" :current="current"></swiper-dot>
			</view>
		</view>
		<view class="bottom-btn">
			<view class="bottom-btn__left" @click="prevHandler">上一步</view>
			<view class="bottom-btn__right" @click="nextHandler" :style="isSubmit ? { background: '#0265fe' } : { background: '#abcaf8' }">就这张</view>
		</view>
	</view>
</template>

<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import { aiProfilePageFromChooseImagePage,chooseImagePageFromCropImagePage } from '@/utils/constant.js';
import { onLoad } from '@dcloudio/uni-app';
import { generateImage } from '@/api/establish/index.js';
import { showConfirm } from '@/utils/common';
import swiperDot from './components/swiper-dot.vue';
const { proxy } = getCurrentInstance();

const eventChannel = proxy.getOpenerEventChannel();
const dataList = ref([]);
const isSubmit = computed(() => dataList.value.length);
const current = ref(0)
let intervalId;
const counter = ref(0)
onLoad(() => {
	eventChannel.on(aiProfilePageFromChooseImagePage, function (data) {
		console.log('data', data);
		getImageList(data);
	});
});
const getImageList = (data) => {
	incrementCounter()
	generateImage(data).then((res) => {
		console.log('res---->', res);
		counter.value = 100
		dataList.value = res.data.data;
		
		console.log('dataList',dataList.value);
	}).finally(()=>{
		clearInterval(intervalId);
	})
};
const closeClickHandler = () => {
	showConfirm('放弃编辑吗？').then(({ confirm }) => {
		if (confirm) {
			// uni.reLaunch({
			// 	url: '/pages/establish/establish'
			// });
			uni.navigateBack()
		}
	});
};
const swiperChange = (e) => {
	console.log('change', e);
	current.value = e.current
};
const swiperClick = (e) => {
	console.log('click', e);
};
const nextHandler = () => {
	if (!isSubmit) return;
	uni.navigateTo({
		url:'/pages/establish/cropImage/cropImage',
		success: (res) => {
			res.eventChannel.emit(chooseImagePageFromCropImagePage,dataList.value[current.value])
		}
	})
};
const prevHandler = () => {
	uni.navigateBack();
};

  const incrementCounter=()=> {
    intervalId = setInterval(() => {
      if (counter.value < 99) {
        counter.value++;
        console.log(counter.value);
      } else {
        clearInterval(intervalId);
      }
    }, 100); 
  }
</script>
<style>
page {
	background: #f5f5f5;
	padding: 0 40rpx;
	box-sizing: border-box;
}
</style>
<style scoped lang="scss">

.content-wrap {
	margin-top: 40rpx;
	height: 75vh;
}
.image-bg {
	height: 100%;
	position: relative;
	&__loading{
			position: absolute;
			top: 50%;
			left:50%;
			transform: translate(-50%,-50%);
	}
	&__text{
		position: absolute;
		top: 50%;
		left:50%;
		transform: translate(-50%,-50%);
		margin-top:50rpx;
		color: #fff;
	}
}
.bottom-btn {
	@include q_flex();
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	margin-top: 80rpx;
	&__left {
		@include q_font_style(32rpx, 600, #000);
		width: 325rpx;
		background-color: #fff;
		border-radius: 20rpx;
	}
	&__right {
		@include q_font_style(32rpx, 600, #fff);
		width: 325rpx;
		border-radius: 20rpx;
	}
}
:deep(.u-swiper__indicator) {
	bottom: 10rpx;
}
</style>
