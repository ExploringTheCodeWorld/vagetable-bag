<template>
	<view>
		<u-navbar title="智能体形象" bgColor="#f5f5f5" :placeholder="true" :safeAreaInsetTop="true">
			<template #left>
				<view class="close-icon" @click="closeClickHandler">
					<image class="image" src="/static/images/establish/drak-close.png" mode=""></image>
				</view>
			</template>
		</u-navbar>
		<view class="cropper">
			<image-cropper
				icon="/static/images/establish/add.png"
				iconWidth="60rpx"
				iconHeight="60rpx"
				text="添加参考图（可选）"
				delIcon="/static/images/establish/del.png"
				ref="imageCropperRef"
			></image-cropper>
			<view class="cropper__text">上传有清晰面部的照片，有助于形象生成效果</view>
		</view>
		<scroll-view :scroll-x="true" class="scroll-container">
			<view class="picture-list">
				<view class="picture-list__item" v-for="(item, index) in pictureList" :key="item.id" @click="checkoutClick(index)">
					<view class="picture-list__item__img">
						<image class="image" :src="item.url" mode=""></image>
					</view>
					<view class="picture-list__item__checkout" v-if="item.checkout">
						<image class="image" src="/static/images/establish/checkout.png" mode=""></image>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="ipt">
			<u-input
				placeholder="请输入内容"
				border="none"
				:customStyle="{
					background: '#fff',
					padding: '20rpx',
					borderRadius: '30rpx'
				}"
				v-model="form.content"
			>
				<template #suffix>
					<view class="ipt--suffix" @click="generateTextHandler">
						<image class="image" src="/static/images/establish/ai.png" mode=""></image>
					</view>
				</template>
			</u-input>
		</view>
		<view class="btn" @click="generateHandler">
			<text class="btn__text">生成形象</text>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import imageCropper from '@/components/image-cropper/image-cropper.vue';
import config from '@/config.js';
import { getToken } from '@/utils/auth.js';
import { aiRoleplay, generateImage,generateText } from '@/api/establish/index.js';
import {aiProfilePageFromChooseImagePage} from '@/utils/constant.js'
const imageCropperRef = ref();
const closeClickHandler = () => {
	uni.navigateBack();
};
const form = ref({
	content: ''
});
const pictureList = ref([
	{
		id: 1,
		url: '/static/images/pic/1.png',
		title: '动漫',
		checkout: false
	},
	{
		id: 2,
		url: '/static/images/pic/2.png',
		title: '水彩',
		checkout: false
	},
	{
		id: 3,
		url: '/static/images/pic/3.png',
		title: '平涂',
		checkout: false
	},
	{
		id: 4,
		url: '/static/images/pic/4.png',
		title: '手绘',
		checkout: false
	},
	{
		id: 5,
		url: '/static/images/pic/5.png',
		title: '厚涂',
		checkout: false
	},
	{
		id: 6,
		url: '/static/images/pic/6.png',
		title: '国风',
		checkout: false
	},
	{
		id: 7,
		url: '/static/images/pic/7.png',
		title: '动漫II',
		checkout: false
	},
	{
		id: 8,
		url: '/static/images/pic/8.png',
		title: '印象',
		checkout: false
	},
	{
		id: 9,
		url: '/static/images/pic/9.png',
		title: '水墨',
		checkout: false
	},
	{
		id: 10,
		url: '/static/images/pic/10.png',
		title: '塔罗',
		checkout: false
	}
]);

const checkoutClick = (index) => {
	pictureList.value[index].checkout = !pictureList.value[index].checkout;
};
const generateHandler = () => {
	imageCropperRef.value.cropImage((data) => {
		console.log('data', data);
		const checkedTitles = pictureList.value.filter((item) => item.checkout).map((item) => item.title);
		const baseData = {
			message: '',
			input: form.value.content,
			list: checkedTitles
		};
		const handleResponse = (res = null) => {
			console.log('res', res);
			const msg = res?.choices[0]?.message.content || '';
			// generateImage({ ...baseData, message: msg }).then((res) => {
			// 	console.log('res---->', res);
			// });
			uni.navigateTo({
				url:'/pages/establish/chooseImage/chooseImage',
				animationType:'fade-in' ,
				animationDuration:300,
				success: (res) => {
					res.eventChannel.emit(aiProfilePageFromChooseImagePage,{ ...baseData, message: msg })
				}
			})
		};

		if (data) {
			aiRoleplay({ base64: data }).then(handleResponse);
		} else {
			handleResponse();
		}
	});
};

const generateTextHandler = ()=>{
	generateText({message:form.value.content}).then(res=>{
		console.log('res',res);
		form.value.content = res.data
	})
}
</script>
<style>
page {
	background: #f5f5f5;
}
</style>
<style scoped lang="scss">
.close-icon {
	width: 30rpx;
	height: 30rpx;
}
.cropper {
	margin-top: 140rpx;
	&__text {
		text-align: center;
		margin-top: 40rpx;
		@include q_font_style(24rpx, 400, #9a9a9a);
	}
}
.scroll-container {
	width: 620rpx;
	overflow: hidden;
	margin: 120rpx auto 0;
	box-sizing: border-box;
}
.picture-list {
	@include q_flex(flex-start);
	&__item {
		position: relative;
		margin-right: 20rpx;
		&__img {
			width: 140rpx;
			height: 190rpx;
		}
		&__checkout {
			position: absolute;
			top: 10rpx;
			right: 10rpx;
			width: 40rpx;
			height: 40rpx;
		}
	}
}
.ipt {
	padding: 0 40rpx;
	margin-top: 40rpx;
	&--suffix {
		width: 60rpx;
		height: 60rpx;
	}
}
.btn {
	margin: 30rpx auto 0;
	box-sizing: border-box;
	text-align: center;
	border-radius: 30rpx;
	width: 670rpx;
	height: 100rpx;
	line-height: 100rpx;
	background-color: #0265fe;
	&__text {
		@include q_font_style(24rpx, 600, #fff);
	}
}
</style>
