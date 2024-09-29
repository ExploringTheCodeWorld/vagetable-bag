<template>
	<u-overlay :show="isShow" :opacity="0.3" @click="closeHandler">
		<view class="longpress" :style="{ top: topValue }">
			<view class="longpress__item" @click="stickyHandler">
				<view class="longpress__item__text">{{ modelData.isPinned ? '取消置顶' : '置顶' }}</view>
				<view class="longpress__item__icon">
					<image :src="modelData.isPinned ? '/static/images/home/sticky-none.png' : '/static/images/home/sticky.png'" class="image" mode=""></image>
				</view>
			</view>
			<u-divider></u-divider>
			<view class="longpress__item" @click="deleteHandler">
				<view class="longpress__item__text delete">从对话列表删除</view>
				<view class="longpress__item__icon">
					<image class="image" src="/static/images/home/del.png" mode=""></image>
				</view>
			</view>
		</view>
	</u-overlay>
</template>

<script setup>
import { ref } from 'vue';
import { updatePinned } from '@/api/index/index';
import { modelDel } from '@/api/find/index.js';
const isShow = ref(false);
const topValue = ref(0);
const modelData = ref({});
const emit = defineEmits(['update', 'close']);
const openDialog = (dom, row) => {
	isShow.value = true;
	// #ifdef APP
	topValue.value = dom.bottom + 10 + 'px';
	// #endif
	// #ifndef APP
	topValue.value = dom.bottom + 50 + 'px';
	// #endif
	modelData.value = row;
};
const cancelHandler = () => {
	isShow.value = false;

};
const closeHandler = () => {
	cancelHandler();
	emit('close');
};
const deleteHandler = () => {
	modelDel(modelData.value.modelId).then(() => {
		cancelHandler();
		emit('update');
	});
};
const stickyHandler = () => {
	const data = {
		modelId: modelData.value.modelId,
		isPinned: !modelData.value.isPinned
	};
	updatePinned(data).then(() => {
		cancelHandler();
		emit('update');
	});
};
defineExpose({
	openDialog
});
</script>

<style scoped lang="scss">
.longpress {
	position: absolute;
	left: 20rpx;
	background-color: #fff;
	width: 375rpx;
	border-radius: 20rpx;
	padding: 20rpx;
	box-sizing: border-box;
	&__item {
		@include q_flex();
		&__text {
			color: #000;
		}
		&__icon {
			width: 60rpx;
			height: 60rpx;
		}
	}
}
.delete {
	color: #fa3e32;
}

.tabbar-icon{
	width: 48rpx;
	height: 48rpx;
}
</style>
