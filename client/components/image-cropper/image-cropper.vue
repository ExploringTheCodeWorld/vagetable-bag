<template>
	<view class="cropper-content">
		<canvas
			:canvas-id="canvasId"
			:id="canvasId"
			:style="{ width: `${canvasWidth}px`, height: `${canvasHeight}px` }"
			class="canvas"
			@touchstart="onTouchStart"
			@touchmove="onTouchMove"
			@touchend="onTouchEnd"
		>
			<!-- 由于cover-view机制，需要每个上面都添加点击事件,而web不需要 -->
			<cover-view class="cover-view" v-if="isShow" :style="{ width: `${canvasWidth}px`, height: `${canvasHeight}px` }" @click="!isWeb && chooseImageOnCanvasClick()">
				<cover-view class="cover-view_center" @click="!isWeb && chooseImageOnCanvasClick()">
					<cover-image
						@click="!isWeb && chooseImageOnCanvasClick()"
						class="cover-view_center__img"
						:src="props.icon"
						:style="{ width: iconWidth, height: iconHeight }"
					></cover-image>
					<cover-view @click="!isWeb && chooseImageOnCanvasClick()" class="cover-view_center__text" :style="textStyle">
						{{ props.text }}
					</cover-view>
				</cover-view>
			</cover-view>
			<cover-image class="cover-delete" :style="{ width: delIconWidth, height: delIconHeight }" v-if="!isShow" @click="deleteHandler" :src="props.delIcon"></cover-image>
		</canvas>
	</view>
</template>

<script setup>
import { ref, onMounted, watch, computed, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();
const devices = ref(uni.getSystemInfoSync());

const isWeb = computed(() => devices.value.uniPlatform == 'web');
const emit = defineEmits(['filePath', 'delete']);

const props = defineProps({
	canvasWidth: {
		type: Number,
		default: 310
	},
	canvasHighet: {
		type: Number,
		default: 310
	},
	icon: {
		type: String,
		default: '/static/logo.png'
	},
	iconWidth: {
		type: [String, Number],
		default: 40
	},
	iconHeight: {
		type: [String, Number],
		default: 40
	},
	text: {
		type: String,
		default: '添加图片'
	},
	textStyle: {
		type: Object,
		default: () => {}
	},
	delIcon: {
		type: String,
		require: true
	},
	delIconWidth: {
		type: [String, Number],
		default: 40
	},
	delIconHeight: {
		type: [String, Number],
		default: 40
	}
});
const formatSize = (size) => (isNaN(size) ? size : `${size}px`);
const iconWidth = computed(() => formatSize(props.iconWidth));
const iconHeight = computed(() => formatSize(props.iconHeight));
const delIconWidth = computed(() => formatSize(props.delIconWidth));
const delIconHeight = computed(() => formatSize(props.delIconHeight));
const canvasWidth = computed(() => props.canvasWidth);
const canvasHeight = computed(() => props.canvasHighet);
const filepath = ref('');
const imgObj = ref({
	x: 0,
	y: 0,
	width: 0,
	height: 0
});
const lastCoordinate = ref({
	x: 0,
	y: 0
});
const startCoordinate = ref({
	x: 0,
	y: 0
});
const isShow = ref(true);
const touchStartTime = ref(0);
const imageScale = ref(1);
const canvasId = ref('myCanvas');
const isDragging = ref(false);
const isPinching = ref(false);
const initialDistance = ref(0);
const images = ref('');
const ctx = ref(null);
onMounted(() => {
	ctx.value = uni.createCanvasContext(canvasId.value);
	console.log('ctx.value', ctx.value);
});
const drawImage = () => {
	ctx.value.clearRect(0, 0, canvasWidth.value, canvasHeight.value);
	ctx.value.drawImage(images.value, imgObj.value.x, imgObj.value.y, imgObj.value.width * imageScale.value, imgObj.value.height * imageScale.value);
	ctx.value.draw();
};
const onTouchStart = (e) => {
	const length = Object.keys(e.touches).length;
	touchStartTime.value = Date.now();
	if (length === 1) {
		isDragging.value = true;
		startCoordinate.value.x = e.touches[0].x;
		startCoordinate.value.y = e.touches[0].y;
		lastCoordinate.value.x = imgObj.value.x;
		lastCoordinate.value.y = imgObj.value.y;
	} else if (length === 2) {
		isPinching.value = true;
		initialDistance.value = getDistance(e.touches);
	}
};
const onTouchMove = (e) => {
	const length = Object.keys(e.touches).length;
	if (length === 1 && isDragging.value) {
		const dx = e.touches[0].x - startCoordinate.value.x;
		const dy = e.touches[0].y - startCoordinate.value.y;
		imgObj.value.x = lastCoordinate.value.x + dx;
		imgObj.value.y = lastCoordinate.value.y + dy;
		drawImage();
	} else if (length === 2 && isPinching.value) {
		const currentDistance = getDistance(e.touches);
		const scaleChange = currentDistance / initialDistance.value;
		const newScale = imageScale.value * scaleChange;
		const minScaleX = canvasWidth.value / imgObj.value.width;
		const minScaleY = canvasHeight.value / imgObj.value.height;
		const minScale = Math.max(minScaleX, minScaleY);
		imageScale.value = Math.max(newScale, minScale);
		initialDistance.value = currentDistance;
		drawImage();
	}
};
const onTouchEnd = (e) => {
	isDragging.value = false;
	isPinching.value = false;
	if (Date.now() - touchStartTime.value < 100) {
		chooseImageOnCanvasClick();
	} else {
		adjustPosition();
	}
};
const getDistance = (touches) => {
	const dx = touches[0].x - touches[1].x;
	const dy = touches[0].y - touches[1].y;
	return Math.sqrt(dx * dx + dy * dy);
};

const adjustPosition = () => {
	const imgWidth = imgObj.value.width * imageScale.value;
	const imgHeight = imgObj.value.height * imageScale.value;

	let targetX = imgObj.value.x;
	let targetY = imgObj.value.y;

	if (imgObj.value.x > 0) {
		targetX = 0;
	} else if (imgObj.value.x + imgWidth < canvasWidth.value) {
		targetX = canvasWidth.value - imgWidth;
	}

	if (imgObj.value.y > 0) {
		targetY = 0;
	} else if (imgObj.value.y + imgHeight < canvasHeight.value) {
		targetY = canvasHeight.value - imgHeight;
	}

	animate(imgObj.value.x, targetX, 300, (value) => {
		imgObj.value.x = value;
		drawImage();
	});

	animate(imgObj.value.y, targetY, 300, (value) => {
		imgObj.value.y = value;
		drawImage();
	});
};
const animate = (startValue, endValue, duration, onUpdate, onComplete) => {
	const startTime = Date.now();
	const step = () => {
		const currentTime = Date.now();
		const elapsed = currentTime - startTime;
		const progress = Math.min(elapsed / duration, 1);
		const value = startValue + (endValue - startValue) * progress;
		onUpdate(value);
		if (progress < 1) {
			requestAnimationFrame(step);
		} else {
			onComplete && onComplete();
		}
	};
	requestAnimationFrame(step);
};
// #ifdef APP
const requestAnimationFrame = (callback) => {
	return setTimeout(callback, 16); // 大约60帧每秒
};
// #endif
const chooseImageOnCanvasClick = () => {
	uni.chooseImage({
		success: function (res) {
			images.value = res.tempFilePaths[0];
			uni.getImageInfo({
				src: res.tempFilePaths[0],
				success: (result) => {
					const imgWidth = result.width;
					const imgHeight = result.height;

					const canvasWidth = props.canvasWidth;
					const canvasHeight = props.canvasHighet;

					let newWidth, newHeight;

					if (imgWidth < canvasWidth && imgHeight < canvasHeight) {
						const widthRatio = canvasWidth / imgWidth;
						const heightRatio = canvasHeight / imgHeight;
						const ratio = Math.max(widthRatio, heightRatio);
						newWidth = imgWidth * ratio;
						newHeight = imgHeight * ratio;
					} else {
						newWidth = imgWidth;
						newHeight = imgHeight;
					}

					imgObj.value.width = newWidth;
					imgObj.value.height = newHeight;
					imgObj.value.x = (canvasWidth - newWidth) / 2;
					imgObj.value.y = (canvasHeight - newHeight) / 2;

					console.log('result', result);
					isShow.value = false;
					drawImage();
				}
			});
		}
	});
};

const cropImage = (cb = () => {}) => {
	if (isShow.value) {
		cb(null);
		emit('filePath', null);
		return;
	}
	uni.canvasToTempFilePath({
		canvasId: canvasId.value,
		x: 0,
		y: 0,
		width: canvasWidth.value,
		height: canvasHeight.value,
		destWidth: canvasWidth.value,
		destHeight: canvasHeight.value,
		success: function ({ tempFilePath }) {
			// #ifdef APP
			plus.io.resolveLocalFileSystemURL(
				tempFilePath,
				function (entry) {
					entry.file(function (file) {
						const fileReader = new plus.io.FileReader();
						fileReader.onloadend = function (e) {
							// const base64Img = 'data:image/' + file.type + ';base64,' + e.target.result;
							const base64Img = e.target.result;
							cb(base64Img);
							emit('filePath', base64Img);
						};
						fileReader.readAsDataURL(file);
					});
				},
				function (e) {
					console.error('Failed to resolve local file system URL:', e.message);
				}
			);
			// #endif
			// #ifndef APP
			cb(tempFilePath);
			emit('filePath', tempFilePath);
			// #endif
		},
		fail: function (error) {
			console.error('Failed to crop image:', error);
		}
	});
};
const deleteHandler = () => {
	isShow.value = true;
	emit('delete');
};
defineExpose({
	cropImage
});
</script>

<style scoped lang="scss">
.cropper-content {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.canvas {
	border-radius: 20rpx;
	overflow: hidden;
	background-color: #fff;
}
.cover-view {
	position: relative;
	border-radius: 20rpx;
	background-color: #fff;
	&_center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: red;
		&__img {
			margin: 0 auto;
		}
		&__text {
			margin-top: 20rpx;
			color: #0e60ff;
			font-weight: 900;
			font-size: 28rpx;
		}
	}
}
.cover-delete {
	position: absolute;
	right: 20rpx;
	top: 20rpx;
	display: block;
	// width: 100rpx;
	// height: 100rpx;
}
</style>
