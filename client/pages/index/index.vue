<template>
	<u-navbar title="对话" :placeholder="true" :safeAreaInsetTop="true" bgColor="#fff" :auto-back="false">
		<template #left>
			<view class=""></view>
		</template>
		<template #right></template>
	</u-navbar>
	<view class="index-page">
		<view
			:class="['dialogue', item.isPinned ? 'active' : '', longpressActive == item.modelId ? 'longActive' : '']"
			v-for="(item, index) in dataList"
			:key="item.modelId"
			@click.stop="dialogueClick(item)"
		>
			<view class="dialogue__wrap" @longpress.stop="(e) => longpressHandler(e, item)">
				<view class="dialogue__wrap__left">
					<image class="image" :src="item.modelImage" mode=""></image>
				</view>
				<view class="dialogue__wrap__right">
					<view class="dialogue__wrap__right__title">{{ item.modelName }}</view>
					<view class="dialogue__wrap__right__content q_text_overflow_1">
						{{ item.introduce }}
					</view>
				</view>
			</view>
		</view>
	</view>
	<longpress-open ref="longpressOpenRef" @update="longpressUpdateHandler" @close="longpressCloseHandler"></longpress-open>
	<tabbar></tabbar>
</template>

<script setup>
import { nextTick, ref } from 'vue';
import config from '@/config';
import { addedList, updatePinned } from '@/api/index/index';
import { onShow } from '@dcloudio/uni-app';
import { indexPageFromChatPage } from '@/utils/constant.js';
import longpressOpen from './components/longpressOpen.vue';
import useTabbarStore from '@/store/modules/tabbar';
const tabbarStore = useTabbarStore()
const dataList = ref([]);
const isLongPress = ref(false);
const longpressOpenRef = ref();
const longpressActive = ref();
const getList = () => {
	addedList().then((res) => {
		console.log('res', res);
		if (res.data.length > 0) {
			res.data.forEach((item) => {
				item.modelImage = config.image_url + item.modelImage;
			});
		}
		dataList.value = res.data;
	});
};
const longpressHandler = (e, item) => {
	longpressActive.value = item.modelId;

	nextTick(() => {
		const query = uni.createSelectorQuery().in();
		query.select('.longActive').boundingClientRect();
		query.exec((res) => {
			console.log('res->', res);
			longpressOpenRef.value.openDialog(res[0], item);
		});
	});
	isLongPress.value = true;
	setTimeout(() => {
		isLongPress.value = false;
	}, 300);
};
const dialogueClick = (item) => {
	if (isLongPress.value) {
		isLongPress.value = false;
		return;
	}
	uni.navigateTo({
		url: '/pages/index/components/chat?modelId='+item.modelId,
	});
};
const longpressUpdateHandler = () => {
	getList();
};
const longpressCloseHandler = () => {
	uni.showTabBar();
	longpressActive.value = +new Date();
};
onShow(() => {
	tabbarStore.setCurrent(0)
	getList();
});
</script>

<style scoped lang="scss">
.dialogue {
	padding-top: 20rpx;
	&__wrap {
		@include q_flex(flex-start);
		box-sizing: border-box;
		padding: 0 40rpx;
		// margin: 0 40rpx;
		// background-color: #0000001f;
		&__left {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			overflow: hidden;
		}
		&__right {
			flex: 1;
			margin-left: 20rpx;
			border-bottom: 1rpx solid #e8e8e8;
			padding-bottom: 30rpx;
			&__title {
				@include q_font_style(32rpx);
			}
			&__content {
				margin-top: 20rpx;
				width: 500rpx;
				@include q_font_style(24rpx, 400, #909399);
			}
		}
	}
}
.active {
	background-color: #f5f5f5;
}
.longActive {
	position: relative;
	z-index: 999999;
	background-color: #fff;
	border-radius: 20rpx;
	// box-sizing: border-box;
	// margin: 0 20rpx;
}
</style>
