<template>
	<view v-if="show" style="margin-top: 100rpx; margin-bottom: 200rpx; overflow: hidden">
	
		<view class="crop-wrap" @touchstart.stop="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
			<canvas
				:class="canvasId"
				:id="canvasId"
				:canvas-id="canvasId"
				:style="{ 
					top: `${frameData.top}px`, 
					left: `${frameData.left * 2}rpx`, 
					width: `${frameData.width * 2}rpx`, 
					height: `${frameData.height * 2}rpx` 
					}"
			></canvas>
			<view
				class="crop-wrap__image"
				:class="{ transition: isTransitioning }"
				:style="{ top: imageStyle.top, left: imageStyle.left, width: imageStyle.width, height: imageStyle.height }"
			>
				<image class="image" :src="imageUrl" mode="scaleToFill"></image>
			</view>
			<view class="crop-wrap__mask"></view>
			<view
				class="crop-wrap__frame"
				:style="{ top: `${frameData.top}px`, left: `${frameData.left * 2}rpx`, width: `${frameData.width * 2}rpx`, height: `${frameData.height * 2}rpx` }"
			>
				<view class="crop-wrap__frame__rect">
					<view
						class="crop-wrap__frame__rect__image"
						:class="{ transition: isTransitioning }"
						:style="{ top: frameImageStyle.top, left: frameImageStyle.left, width: frameImageStyle.width, height: frameImageStyle.height }"
					>
						<image class="image" :src="imageUrl" mode="scaleToFill"></image>
					</view>
				</view>
			</view>
		</view>
		<button style="position: absolute;bottom: 0rpx;left: 0rpx;" @click="cropImage">裁剪</button>
	</view>
</template>

<script setup>
import { computed, getCurrentInstance, nextTick, onMounted, ref,watch } from 'vue';
import { onShow } from '@dcloudio/uni-app';
const { proxy } = getCurrentInstance();
const device = uni.getSystemInfoSync();
const props = defineProps({
	imageUrl: {
		type: String,
		default: ''
	},
	frameTop: {
		type: Number,
		default: 200
	},
	frameWidth: {
		type: Number,
		default: 351
	},
	frameHeight: {
		type: Number,
		default: 351
	}
});
const imageUrl = computed(() => props.imageUrl);
const show = ref(false);
const imageStyle = ref({});
const frameImageStyle = ref({});
const canvasId = ref('cropCanvas');
const recordData = ref({
	width: 0,
	height: 0
});
const frameData = ref({
	left: 10,
	top: props.frameTop || 200,
	width: props.frameWidth || 351,
	height: props.frameHeight || 351
});
const touchStartData = ref({
	startX: 0,
	startY: 0,
	imageStartLeft: 0,
	imageStartTop: 0,
	frameStartLeft: 0,
	frameStartTop: 0
});
const isTransitioning = ref(false);
onMounted(() => {
	show.value = false;
	recordData.value.width = device.screenWidth - 20;
	recordData.value.height = device.screenHeight;
	console.log('device', device);
	init();
});

const init = () => {
	const width = recordData.value.width;
	const height = recordData.value.height;
	imageStyle.value = {
		width: `${parseInt(width)}px`,
		height: `${parseInt(height)}px`,
		left: '0px',
		top: `${frameData.value.top}px`
	};

	frameImageStyle.value = {
		width: `${parseInt(width)}px`,
		height: `${parseInt(height)}px`,
		left: '0',
		top: `${-frameData.value.top + frameData.value.top}px`
	};
	console.log('frameImageStyle', frameImageStyle.value);
	console.log('imageStyle', imageStyle.value);
	show.value = true;
};

const onTouchStart = (e) => {
	isTransitioning.value = false;
	console.log('start', e);
	const touch = e.touches[0];
	touchStartData.value.startX = touch.clientX;
	touchStartData.value.startY = touch.clientY;
	touchStartData.value.imageStartLeft = parseInt(imageStyle.value.left || 0);
	touchStartData.value.imageStartTop = parseInt(imageStyle.value.top || 0);
	touchStartData.value.frameStartLeft = parseInt(frameImageStyle.value.left || 0);
	touchStartData.value.frameStartTop = parseInt(frameImageStyle.value.top || 0);
};

const onTouchMove = (e) => {
	console.log('move', e);
	const touch = e.touches[0];
	const deltaX = touch.clientX - touchStartData.value.startX;
	const deltaY = touch.clientY - touchStartData.value.startY;
	imageStyle.value.left = `${touchStartData.value.imageStartLeft + deltaX}px`;
	imageStyle.value.top = `${touchStartData.value.imageStartTop + deltaY}px`;

	frameImageStyle.value.left = `${touchStartData.value.frameStartLeft + deltaX}px`;
	frameImageStyle.value.top = `${touchStartData.value.frameStartTop + deltaY - 0}px`;
};
const onTouchEnd = (e) => {
	console.log('end', e);
	console.log('imageStyle', imageStyle.value.top);
	console.log('frameImageStyle', frameImageStyle.value.top);
	console.log('frameData', frameData.value);
	let imageTop = parseInt(frameImageStyle.value.top);
	if (imageTop >= 0) {
		frameImageStyle.value.top = '0px';
		imageStyle.value.top = frameData.value.top + 'px';
	}
	const { isLeftOut, isRightOut, isBottomOut } = isImageOutOfBounds();

	if (isLeftOut) {
		imageStyle.value.left = '0px';
		frameImageStyle.value.left = '0px';
	}
	if (isRightOut) {
		imageStyle.value.left = '0px';
		frameImageStyle.value.left = '0px';
	}
	console.log(' frameData.value.top', frameData.value.top);
	console.log(' frameData.value.height', frameData.value.height);
	if (isBottomOut) {
		const frameBottom = frameData.value.top * 2 + frameData.value.height * 2;
		const imageHeight = parseInt(imageStyle.value.height) * 2;
		const newTop = frameBottom - imageHeight;
		imageStyle.value.top = `${newTop / 2}px`;
		frameImageStyle.value.top = `${newTop / 2 + -frameData.value.top}px`;
	}
	nextTick(() => {
		isTransitioning.value = true;
	});
};
const isImageOutOfBounds = () => {
	const imageLeft = parseInt(imageStyle.value.left) * 2;
	const imageWidth = parseInt(imageStyle.value.width) * 2;
	const imageTop = parseInt(imageStyle.value.top) * 2;
	const imageHeight = parseInt(imageStyle.value.height) * 2;
	const frameLeft = frameData.value.left * 2;
	const frameTop = frameData.value.top * 2;
	const frameWidth = frameData.value.width * 2;
	const frameHeight = frameData.value.height * 2;
	const imageRight = imageLeft + imageWidth;
	const imageBottom = imageTop + imageHeight;
	const frameRight = frameLeft + frameWidth;
	const frameBottom = frameTop + frameHeight;
	let isLeftOut = false;
	let isRightOut = false;
	let isBottomOut = false;
	if (imageLeft > frameLeft) {
		console.log('图片左边露出黑色背景图');
		isLeftOut = true;
	}

	if (imageRight < frameRight) {
		console.log('图片右边露出黑色背景图');
		isRightOut = true;
	}
	console.log('imageBottom', imageBottom);
	console.log('frameBottom', frameBottom);
	if (imageBottom - frameData.value.top < frameBottom) {
		console.log('图片下边露出黑色背景图');
		isBottomOut = true;
	}
	return { isLeftOut, isRightOut, isBottomOut };
};
const cropImage = (cb) => {
	console.log('imageStyle', imageStyle.value);
	const canvasStyle = {
		width: frameData.value.width,
		height: frameData.value.height
	};
	    // 获取图片的偏移量
	    const imageLeft = removeUnit(imageStyle.value.left);
	    const imageTop = removeUnit(imageStyle.value.top);
	
	    // 计算裁剪区域的起始坐标
	    const cropX = -imageLeft + frameData.value.left;
	    const cropY = -imageTop + frameData.value.top;
		console.log('cropX',cropX);
		console.log('cropY',cropY);
	const ctx = uni.createCanvasContext(canvasId.value);
	ctx.clearRect(0, 0, canvasStyle.width, canvasStyle.height);
	// ctx.drawImage(imageUrl.value, 0, 0, removeUnit(imageStyle.value.width), removeUnit(imageStyle.value.height));
	 ctx.drawImage(
	        imageUrl.value,
	        cropX, cropY, // 裁剪区域的起始坐标
	        frameData.value.width * 2, frameData.value.height * 2, // 裁剪区域的尺寸
	        0, 0, // 在画布上的起始坐标
	        canvasStyle.width, canvasStyle.height // 在画布上的尺寸
	    );
	ctx.draw(true, () => {
		uni.canvasToTempFilePath({
			canvasId: canvasId.value,
			x: 0,
			y: 0,
			width: canvasStyle.width,
			height: canvasStyle.height,
			destWidth: canvasStyle.width,
			destHeight: canvasStyle.height,
			success: function ({ tempFilePath }) {
				console.log('res', tempFilePath);
				// #ifdef H5
				const path = parseBlob(tempFilePath);
				cb({
					base64Img: tempFilePath,
					path
				});
				emit('filePath', {
					base64Img: tempFilePath,
					path
				});
				// #endif
				// #ifdef APP
				plus.io.resolveLocalFileSystemURL(
					tempFilePath,
					function (entry) {
						entry.file(function (file) {
							const fileReader = new plus.io.FileReader();
							fileReader.onloadend = function (e) {
								console.log('e', e.target);
								// const base64Img = 'data:image/' + file.type + ';base64,' + e.target.result;
								const base64Img = e.target.result;
								console.log('base64Img', base64Img);
								cb({
									base64Img,
									path: tempFilePath
								});
								emit('filePath', {
									base64Img,
									path: tempFilePath
								});
							};
							fileReader.readAsDataURL(file);
						});
					},
					function (e) {
						console.error('Failed to resolve local file system URL:', e.message);
					}
				);
				// #endif
			},
			fail: function (error) {
				console.error('Failed to crop image:', error);
			}
		});
	});
};
const parseBlob = (base64) => {
	const arr = base64.split(',');
	const mime = arr[0].match(/:(.*?);/)[1];
	const bstr = atob(arr[1]);
	const n = bstr.length;
	const u8arr = new Uint8Array(n);
	for (let i = 0; i < n; i++) {
		u8arr[i] = bstr.charCodeAt(i);
	}
	const url = URL || webkitURL;
	console.log('url->', url);
	return url.createObjectURL(new Blob([u8arr], { type: mime }));
};
function removeUnit(value) {
	return parseFloat(value.replace(/px|rpx/g, ''));
}
watch(() => [props.frameWidth, props.frameHeight, props.frameTop], ([newWidth, newHeight, newTop]) => {
  frameData.value.width = newWidth;
  frameData.value.height = newHeight;
  frameData.value.top = newTop;
  init();
});
</script>
<style scoped lang="scss">
$animate: 0.3s;
.crop-wrap {
	width: 100%;
	height: 100%;
	background: #000;
	position: fixed;
	top: 0;
	bottom: 0;
	overflow: hidden;

	&__image {
		position: absolute;
		margin-left: 20rpx;
		&.transition {
			transition: all $animate ease;
		}
	}

	&__mask {
		position: absolute;
		left: 0rpx;
		right: 0rpx;
		top: 0rpx;
		bottom: 0rpx;
		background: black;
		opacity: 0.4;
	}

	&__frame {
		position: absolute;
		left: 20rpx;
		top: 200rpx;
		width: 702rpx;
		height: 702rpx;

		&__rect {
			position: absolute;
			width: 100%;
			height: 100%;
			border: 2rpx solid white;
			overflow: hidden;
			box-sizing: content-box;

			&__image {
				position: absolute;
				&.transition {
					transition: all $animate ease;
				}
			}
		}
	}
}
.cropCanvas {
	position: absolute;
}
</style>
