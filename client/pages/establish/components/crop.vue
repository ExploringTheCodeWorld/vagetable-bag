<template>
	<u-navbar title="裁剪" bgColor="#fff" :placeholder="true" :safeAreaInsetTop="true">
		<template #left>
			<view class="close-icon" @click="closeClickHandler">
				<image class="image" src="/static/images/establish/drak-close.png" mode=""></image>
			</view>
		</template>
	</u-navbar>
	<qf-image-cropper
		:navigation="false"
		:AREA_SIZE="cropAREA_SIZE"
		:choosable="false"
		:width="500"
		:height="cropHeight"
		:src="avatarSrc"
		:radius="30"
		@crop="handleCrop"
	></qf-image-cropper>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from 'vue';
import test from './test.vue';
import qfImageCropper from '@/components/qf-image-cropper/qf-image-cropper.vue';
import { cropPageFromCropImagePage,cropImagePageFromCropPage,establishPageFromCropPage } from '@/utils/constant.js';
import { onLoad } from '@dcloudio/uni-app';
const { proxy } = getCurrentInstance();
const eventChannel = proxy.getOpenerEventChannel();
const avatarSrc = ref('');
const cbData = ref({
	type: 1
});
onLoad(() => {

	eventChannel.on(cropImagePageFromCropPage, function (data) {
		cbData.value.type = data.type;
		avatarSrc.value = data.img;
	});
	eventChannel.on(establishPageFromCropPage, function (data) {
		avatarSrc.value = data;
		cbData.value.type = 1
	});
});
const cropHeight = computed(() => {
	if (cbData.value.type == 1) {
		return 500;
	} else {
		return proxy.$devices.screenHeight;
	}
});
const cropAREA_SIZE = computed(() => {
	if (cbData.value.type == 1) {
		return 75;
	} else {
		return 150;
	}
});

const closeClickHandler = () => {
	uni.navigateBack();
};
const handleCrop = (e) => {
	console.log('e', e);
	const data = {
		...cbData.value,
		path: e.tempFilePath,
		bg:avatarSrc.value
	};
	uni.navigateBack({
		success: (res) => {
			uni.$emit(cropPageFromCropImagePage, data);
		}
	});
};
</script>

<style scoped lang="scss"></style>
