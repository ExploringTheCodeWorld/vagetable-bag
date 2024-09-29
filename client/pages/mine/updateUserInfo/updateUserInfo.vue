<template>
	<view>
		<u-navbar title="个人资料" :autoBack="false" :safeAreaInsetTop="true" :fixed="true" :placeholder="true">
			<template #left>
				<view class="navbar-left" @click="cancelHandler">取消</view>
			</template>
			<template #right>
				<view class="navbar-right" @click="confirmHandler" :style="!isSubmit ? {color:'#abcaf8'}:{}">确定</view>
			</template>
		</u-navbar>
		<view class="profile" @click="clickPictureHandler">
			<view class="profile__img">
				<image class="image" :src="form._userImage" mode=""></image>
			</view>
			<view class="profile__picture">
				<image class="image" src="/static/images/mine/picture.png" mode=""></image>
			</view>
		</view>
		<u-form labelPosition="top" :model="form" :rules="rules" ref="formRef">
			<u-form-item label="昵称" prop="form.nickName" borderBottom ref="itemRef">
				<u-input v-model="form.nickName" border="none" :customStyle="{background:'#fff',height:'80rpx',borderRadius:'20rpx',textIndent: '1em'}"></u-input>
			</u-form-item>
		</u-form>
	</view>
	<qf-image-cropper
		:navigation="true"
		:AREA_SIZE="75"
		:choosable="false"
		:width="500"
		:height="500"
		:src="form._userImage"
		:radius="200"
		@crop="handleCrop"
		zIndex="99999"
		v-if="isCrop"
	></qf-image-cropper>
</template>

<script setup>
import { computed,ref } from 'vue';
import useUserStore from '@/store/modules/user';
import {onShow} from '@dcloudio/uni-app';
import qfImageCropper from '@/components/qf-image-cropper/qf-image-cropper.vue';
import uploadFile from '@/utils/upload.js'
import {updateUserInfo} from '@/api/user.js'
import { toast } from '@/utils/common';
import  config  from '@/config.js';
const userStore = useUserStore();
const userInfo = computed(()=>userStore.userInfo)
const isCrop = ref(false)
const form = ref({
	nickName: '',
	_userImage:'',
	...userInfo.value
});
const rules = ref({
	nickName:{  
      type: 'string',  
      required: true,  
      message: '请填写昵称',  
      trigger: ['blur', 'change'],  
    }
});
const isSubmit = computed(() => {
	return userInfo.value.nickName !== form.value.nickName ||
	       form.value.nickName === '' ||
	       form.value._userImage !== userInfo.value.userAvatar;
});
onShow(()=>{
	form.value._userImage = userInfo.value.userAvatar
})
const clickPictureHandler = () => {
	uni.chooseImage({
		count:1,
		sourceType:['album'],
		success: (res) => {
			console.log('res',res);
			const path = res.tempFilePaths[0];
			form.value._userImage = path
			isCrop.value = true
		}
	})
};
const cancelHandler = () => {
	uni.navigateBack();
};
const handleCrop = (e)=>{
	uploadFile(e.tempFilePath).then(res=>{
		console.log('res',res);
		form.value._userImage = res.url
		form.value.userAvatar = res.fileName
		isCrop.value = false
	})
}
const confirmHandler = () => {
	if(!isSubmit.value)return
	form.value.userAvatar = removeSubstring(form.value.userAvatar)
	console.log('form。value',form.value);
	updateUserInfo(form.value).then(async (res)=>{
		toast('修改成功')
		await userStore.getInfo()
		uni.navigateBack()
	})
};

function removeSubstring(url) {
  const substring = config.image_url;
  if (url.includes(substring)) {
    return url.replace(substring, '');
  }
  return url;
}
</script>
<style>
page {
	background-color: #f5f5f5;
	box-sizing:border-box;
	padding:0 40rpx;
}
</style>

<style scoped lang="scss">
.navbar-left {
}
.navbar-right {
	color: #0562ed;
}
.profile {
	position: relative;
	width: 160rpx;
	height: 160rpx;
	margin: 40rpx auto 0;
	&__img {
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
		overflow: hidden;
	}
	&__picture {
		width: 64rpx;
		height: 64rpx;
		position: absolute;
		bottom: 0rpx;
		right: 0rpx;
	}
}
</style>
