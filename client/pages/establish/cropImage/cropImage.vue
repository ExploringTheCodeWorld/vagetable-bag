<template>
	<view>
		<u-navbar title="智能体形象" bgColor="#fff" :placeholder="true" :safeAreaInsetTop="true">
			<template #left>
				<view class="close-icon" @click="closeClickHandler">
					<image class="image" src="/static/images/establish/drak-close.png" mode=""></image>
				</view>
			</template>
		</u-navbar>
		<view class="profile-prcture">
			<view class="profile-prcture__avatar" @click="cropBgHandler(1)">
				<view class="profile-prcture__avatar__img">
					<image class="image" :src="imageData.avatar" mode="scaleToFill"></image>
				</view>
				<view class="profile-prcture__avatar__crop">
					<image src="/static/images/establish/crop.png" class="image" mode=""></image>
				</view>
			</view>
		</view>
		<view class="chat-bg" @click="cropBgHandler(2)">
			<view class="chat-bg__item">
				<image class="image" :src="imageData.bg" mode="scaleToFill"></image>
			</view>
			<!-- <view class="chat-bg__linear">
				<view class="chat-bg__linear__left"></view>
				<view class="chat-bg__linear__right"></view>
				<view class="chat-bg__linear__left"></view>
			</view> -->
		</view>
		<view class="checkout">
			<u-checkbox shape="circle" :customStyle="{ marginBottom: '8px' }" label="启用聊天背景" name="agree" usedAlone v-model:checked="enableBackground"></u-checkbox>
		</view>
		<view class="bottom-btn">
			<view class="bottom-btn__left" @click="cancelHandler">更换形象</view>
			<view class="bottom-btn__right" @click="confirmHandler">确定</view>
		</view>
	</view>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { cropPageFromCropImagePage, chooseImagePageFromCropImagePage, cropImagePageFromCropPage,cropImagePageFromEstablishPage } from '@/utils/constant.js';
import config from '@/config.js'
import uploadFile from '@/utils/upload.js'
const { proxy } = getCurrentInstance();
const eventChannel = proxy.getOpenerEventChannel();
const imageData = ref({
	avatar: '',
	bg: ''
});
onLoad(() => {
	uni.$on(cropPageFromCropImagePage, (data) => {
		console.log('data--->', data);
		if (data.type == 1) {
			imageData.value.avatar = data.path;
		} else {
			imageData.value.bg = data.path;
		}
	});
	eventChannel.on(chooseImagePageFromCropImagePage, (data) => {
		console.log('data',data);
		imageData.value.avatar = data.url;
		imageData.value.bg = data.url;
	});
});
const enableBackground = ref(false);
const closeClickHandler = () => {
	uni.navigateBack();
};

const cropBgHandler = (type) => {
	const img = type === 1 ? imageData.value.avatar : imageData.value.bg;
	const data = { type, img };
	uni.navigateTo({
		url: '/pages/establish/components/crop',
		success: (res) => res.eventChannel.emit(cropImagePageFromCropPage, data)
	});
};
const cancelHandler = () => {};
const confirmHandler = async () => {

	const bgInfo = await uni.getImageInfo({
		src:imageData.value.bg
	})
	const avatarInfo = await uni.getImageInfo({
		src:imageData.value.avatar
	})
	const bg = await uploadFile(bgInfo.path)
	const avatar =  await uploadFile(avatarInfo.path)
	const data = {
		enableBackground:enableBackground.value,
		backgroundImage:bg.fileName,
		modelImage:avatar.fileName,
		isAiImage:true,
	}
	 console.log('Navigating to establish page with data:', data);
	uni.navigateTo({
		url:'/pages/establish/establish',
		success: (res) => {
			console.log('Emitting cropImagePageFromEstablishPage event');
			uni.$emit(cropImagePageFromEstablishPage,data)
		}
	})
};

</script>
<style>
page {
	padding: 0 40rpx;
	box-sizing: border-box;
	background: #fff;
}
</style>

<style scoped lang="scss">
.profile-prcture {
	&__avatar {
		width: 166rpx;
		height: 166rpx;
		margin: 40rpx auto 0;
		overflow: hidden;
		position: relative;
		&__img {
			width: 166rpx;
			height: 166rpx;
			border-radius: 50%;
			overflow: hidden;
		}
		&__crop {
			position: absolute;
			bottom: 0rpx;
			right: 0rpx;
			width: 40rpx;
			height: 40rpx;
			z-index: 1;
			border-radius: 50%;
			overflow: hidden;
			background: #fff;
			// box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1); /* 阴影样式 */
		}
	}
}
.chat-bg {
	position: relative;
	&__item {
		width: 550rpx;
		height: 60vh;
		border-radius: 20rpx;
		overflow: hidden;
		margin: 40rpx auto 0;
	}
	// &__linear {
	// 	position: absolute;
	// 	bottom: 0rpx;
	// 	left: 60rpx;
	// 	width: 550rpx;
	// 	height: 20vh;
	// 	border-bottom-right-radius: 20rpx;
	// 	border-bottom-left-radius: 20rpx;
	// 	background: linear-gradient(to top, black, transparent);

	// 	&__left {
	// 		border-radius: 20rpx;
	// 		height: 80rpx;
	// 		background: #808080;
	// 	}
	// 	&__right {
	// 		width: 300rpx;
	// 		border-radius: 20rpx;
	// 		height: 80rpx;
	// 		background: #2e2e2e;
	// 		@include q_flex(flex-end);
	// 	}
	// }
}
.bottom-btn {
	@include q_flex();
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	margin-top: 40rpx;
	&__left {
		@include q_font_style(32rpx, 600, #000);
		width: 325rpx;
		background-color: #f5f5f5;
		border-radius: 20rpx;
	}
	&__right {
		@include q_font_style(32rpx, 600, #fff);
		width: 325rpx;
		border-radius: 20rpx;
		background: #0265fe;
	}
}
.checkout {
	@include q_flex(center, center);
	margin-top: 30rpx;
}
</style>
