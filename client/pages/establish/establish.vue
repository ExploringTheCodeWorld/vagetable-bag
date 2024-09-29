<template>
	<u-navbar title="创建AI智能体" :placeholder="true" :safeAreaInsetTop="true" bgColor="#f5f5f5">
		<template #left>
			<view class="close-icon" @click="closeClickHandler">
				<image class="image" src="/static/images/establish/drak-close.png" mode=""></image>
			</view>
		</template>
		<template #right>
			<view :class="['improvement', submitFlag && form.modelImage == '' ? 'improvement-active' : '']" @click="oneClickImprovement">
				<image class="image" src="/static/images/establish/improvement.png" mode=""></image>
			</view>
		</template>
	</u-navbar>

	<view class="establish-wrap">
		<view class="establish-wrap__avatar" @click="editAvatarHandler" v-if="!enableBackgroundFlag">
			<view class="establish-wrap__avatar__img">
				<image class="image" :src="form.icon" mode=""></image>
			</view>
			<view class="establish-wrap__avatar__edit" v-if="!isHttp">
				<image src="/static/images/add.png" class="image" mode=""></image>
			</view>
		</view>
		<view class="establish-wrap__bg" v-if="enableBackgroundFlag">
			<image class="image" :src="form.iconBg" mode=""></image>
		</view>
		<view @click="aiActionSelectHandler" :class="['establish-wrap__tag', enableBackgroundFlag || isHttp ? 'tag-active' : '']">
			{{ enableBackgroundFlag || isHttp ? '更换形象' : 'AI生成形象' }}
		</view>
		<view class="establish-wrap__name container">
			<view class="establish-wrap__name__title title">名称</view>
			<view class="establish-wrap__name__input">
				<u-input type="text" border="none" placeholder="输入名称" v-model="form.modelName"></u-input>
			</view>
		</view>
		<view class="establish-wrap__content container">
			<view class="establish-wrap__content__title title">设定描述</view>
			<view class="establish-wrap__content__textarea">
				<u-textarea v-model="form.modelDescription" :placeholder="placeholder" border="none"></u-textarea>
			</view>
		</view>
		<view class="establish-wrap__cell container">
			<u-cell-group :border="false">
				<u-cell
					v-for="(item, index) in cellOptions"
					@click="onClickCellHandler(item)"
					:key="item.id"
					:is-link="item.isLink"
					:value="item.value"
					:title="item.title"
					:border="item.border"
				>
					<template #icon>
						<image class="establish-wrap__cell__icon" :src="item.icon" mode=""></image>
					</template>
					<template #title>
						<view class="title">{{ item.title }}</view>
					</template>
				</u-cell>
			</u-cell-group>
		</view>
		<view class="establish-wrap__settings" @click="advancedSettingsHandler" v-if="!isSettings">
			<u-icon name="plus" color="#0562ed"></u-icon>
			<text class="establish-wrap__settings__text">更多高级设定</text>
		</view>
		<template v-if="isSettings">
			<view class="establish-wrap__content container">
				<view class="establish-wrap__content__title title">介绍</view>
				<view class="establish-wrap__content__textarea">
					<u-textarea v-model="form.introduce" placeholder="示例:你的英语学习路上最好的伙伴" border="none"></u-textarea>
				</view>
			</view>
			<view class="establish-wrap__content container">
				<view class="establish-wrap__content__title title">开场白</view>
				<view class="establish-wrap__content__textarea">
					<u-textarea v-model="form.prologue" placeholder="将作为开启聊天的第一句话" border="none"></u-textarea>
				</view>
			</view>
		</template>
	</view>
	<view style="height: 110rpx"></view>
	<button @click="submit" :class="['fixed-btn', submitFlag ? 'btn-active' : '']">创建智能体</button>
	<u-action-sheet
		:safeAreaInsetBottom="true"
		@close="closeActionSheetHandler"
		:actions="actionSheetList"
		round="20"
		description="该形象将用于智能体头像和聊天背景"
		cancelText="取消"
		:show="isActionShow"
	>
		<template #default>
			<u-line></u-line>
			<view class="action-wrap">
				<view class="action-wrap__ai" @click="aiActionSelectHandler">
					<view class="action-wrap__ai__img">
						<image class="image" src="/static/images/ai.png" mode=""></image>
					</view>
				</view>
				<u-line></u-line>
				<view class="action-wrap__album" @click="albumActionSelectHandler">相册上传</view>
			</view>
		</template>
	</u-action-sheet>
	<privacy ref="privacyRef" @update="updateHandler"></privacy>
	<!-- <tabbar></tabbar> -->
</template>

<script setup>
import { computed, getCurrentInstance, ref, onMounted, onUnmounted } from 'vue';
import { createModel, oneTouchImprovement } from '@/api/establish/index.js';
import { toast, showConfirm } from '@/utils/common';
import useUserStore from '@/store/modules/user';
import { storeToRefs } from 'pinia';
import config from '@/config.js';
import { onLoad, onShow, onHide } from '@dcloudio/uni-app';
import { cropImagePageFromEstablishPage, establishPageFromCropPage, cropPageFromCropImagePage } from '@/utils/constant.js';
import uploadFile from '@/utils/upload.js';
import useSettingsStore from '@/store/modules/settings.js';
import privacy from './components/privacy.vue';
import useModelStore from '@/store/modules/model.js';
import useTabbarStore from '@/store/modules/tabbar';
const modelStore = useModelStore();
const tabbarStore = useTabbarStore();
const settingsStore = useSettingsStore();
const { proxy } = getCurrentInstance();
const eventChannel = proxy.getOpenerEventChannel();
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);
const isActionShow = ref(false);
const isSettings = ref(false);
const privacyRef = ref();
const actionSheetList = ref([
	{
		name: 'AI生成',
		id: 1
	},
	{
		name: '相册上传',
		id: 2
	}
]);
const form = ref({
	modelName: '',
	modelImage: '',
	modelDescription: '',
	introduce: '',
	icon: '/static/icon.png',
	iconBg: '',
	sound: '',
	isAiImage: false,
	language: settingsStore.selectedLanguage,
	isPublic: settingsStore.selectedPublicMode,
	creatorId: userInfo.value.userId,
	enableBackground: false,
	prologue: ''
});
const enableBackgroundFlag = computed(() => form.value.enableBackground);
const submitFlag = computed(() => form.value.modelName == '');
const isHttp = computed(() => isHttpOrHttps(form.value.icon));
const placeholder = ref(`示例：你是一位经验丰富的英语老师，拥有激发学生学习热情的教学方法。你善于运用幽默和实际应用案例，使对话充满趣味。`);

const cellOptions = ref([
	{
		id: 1,
		title: '声音',
		icon: '/static/images/establish/sound.png',
		isLink: true,
		border: true,
		value: '去编辑'
	},
	{
		id: 2,
		title: '语言',
		icon: '/static/images/establish/language.png',
		isLink: true,
		border: true,
		value: settingsStore.getLanguageLabel
	},
	{
		id: 3,
		title: settingsStore.getPublicModeLabel,
		icon: '/static/images/establish/open.png',
		isLink: true,
		border: false,
		value: ''
	}
]);
const handleCropImagePageEvent = (data) => {
	form.value = {
		...modelStore.getCreateModel(),
		...data
	};
	console.log('合并之后--->', form.value);
	form.value.icon = config.image_url + data.modelImage;
	form.value.iconBg = config.image_url + data.backgroundImage;
};
const handleCropPage = (data) => {
	uploadFile(data.path).then((result) => {
		console.log('上传成功', result);
		form.value.icon = config.image_url + result.fileName;
		form.value.modelImage = result.fileName;
	});
};
onLoad(() => {
	uni.$once(cropImagePageFromEstablishPage, handleCropImagePageEvent);
	uni.$once(cropPageFromCropImagePage, handleCropPage);
});
onShow(() => {
	cellOptions.value[1].value = settingsStore.getLanguageLabel;
	tabbarStore.setCurrent(2)
});
onHide(() => {
	uni.$off(cropImagePageFromEstablishPage, handleCropImagePageEvent);
	uni.$off(cropPageFromCropImagePage, handleCropPage);
});
const advancedSettingsHandler = () => {
	isSettings.value = true;
};
const onClickCellHandler = (item) => {
	switch (item.id) {
		case 1:
			toast('暂未开放');
			break;
		case 2:
			uni.navigateTo({
				url: '/pages/establish/language/language'
			});
			break;
		case 3:
			privacyRef.value.openDialog();
			break;
		default:
			break;
	}
};
const updateHandler = () => {
	cellOptions.value[2].title = settingsStore.getPublicModeLabel;
};
const submit = () => {
	if (submitFlag.value) return;
	const data = {
		...form.value,
		sound: settingsStore.selectedLanguage,
		language: settingsStore.selectedPublicMode
	};
	console.log('data', data);
	uni.showLoading({
		title: '正在创建，请稍候...'
	});
	createModel(data)
		.then((res) => {
			console.log('Current server time (UTC):', new Date().toISOString());
			console.log('res', res);
			uni.redirectTo({
				url:'/pages/index/components/chat?modelId='+res.data.modelId,
				success: () => {
					settingsStore.resetToDefaults()
				}
			})
		})
		.catch((err) => {
			console.log('哪里错误了', err);
		}).finally(()=>{
			uni.hideLoading();
		})
};
const editAvatarHandler = () => {
	isActionShow.value = true;
};
const closeAction = () => {
	isActionShow.value = false;
};
const closeActionSheetHandler = () => {
	closeAction();
};
const oneClickImprovement = () => {
	if (submitFlag.value && form.modelImage == '') return;
	uni.showLoading({
		title: '正在完善，请稍候...'
	});
	oneTouchImprovement(form.value)
		.then(({ data }) => {
			form.value = {
				...form.value,
				...data
			};
			if (data.modelImage != '') {
				uni.getImageInfo({
					src: data.modelImage.data[0].url,
					success: (res) => {
						uploadFile(res.path).then((result) => {
							console.log('上传成功', result);
							form.value.icon = config.image_url + result.fileName;
							form.value.modelImage = result.fileName;
						});
					}
				});
			}
			console.log('res', data);
		})
		.finally(() => {
			uni.hideLoading();
		});
};
const closeClickHandler = () => {
	showConfirm('确定放弃编辑吗？').then(async ({ confirm }) => {
		if (confirm) {
			const pages = getCurrentPages();
			const page = pages[pages.length - 2];
			const route = '/' + page?.route
			console.log('route',route);
			const isTabbarPageFlag = await tabbarStore.findPage(route);

			const handleSuccess = () => {
				settingsStore.resetToDefaults();
			};
			console.log('isTabbarPageFlag',isTabbarPageFlag);
			if (isTabbarPageFlag) {
				uni.navigateBack({ success: handleSuccess });
			} else {
				uni.reLaunch({
					url: '/pages/index/index',
					success: handleSuccess
				});
			}
		}
	});
};
const aiActionSelectHandler = () => {
	uni.navigateTo({
		url: '/pages/establish/aiProfile/aiProfile',
		animationType: 'slide-in-bottom',
		animationDuration: 300,
		success: () => {
			modelStore.setCreateModel(form.value);
			closeAction();
		}
	});
};
const albumActionSelectHandler = () => {
	uni.chooseImage({
		count: 1, //默认9
		sizeType: ['original', 'compressed'],
		sourceType: ['album'],
		success: (res) => {
			console.log('res', res.tempFilePaths);
			const file = res.tempFilePaths[0];
			uni.navigateTo({
				url: '/pages/establish/components/crop',
				success: (res) => {
					res.eventChannel.emit(establishPageFromCropPage, file);
				}
			});

			closeAction();
		}
	});
};
function isHttpOrHttps(url) {
	const pattern = /^https?:\/\//i; // i表示不区分大小写
	return pattern.test(url);
}
</script>
<style lang="scss">
page {
	padding: 0 40rpx;
	box-sizing: border-box;
	background: #f5f5f5;
}
</style>
<style scoped lang="scss">
$m-t-30: 30rpx;
.establish-wrap {
	&__bg {
		width: 144rpx;
		height: 244rpx;
		border-radius: 20rpx;
		overflow: hidden;
		margin: 40rpx auto 0;
	}
	&__avatar {
		width: 144rpx;
		height: 144rpx;
		margin: 40rpx auto 0;
		overflow: hidden;
		position: relative;

		&__img {
			width: 144rpx;
			height: 144rpx;
			border-radius: 50%;
			overflow: hidden;
		}
		&__edit {
			position: absolute;
			bottom: 0rpx;
			right: 0rpx;
			width: 40rpx;
			height: 40rpx;
			z-index: 1;
		}
	}
	&__tag {
		border-radius: 60rpx;
		background-color: #fff;
		font-size: 24rpx;
		color: #0562ed;
		font-weight: bolder;
		margin: 20rpx auto 0;
		padding: 10rpx 20rpx;
		width: 150rpx;
		text-align: center;
		// @include q_flex(center,center)
	}
	&__name {
		@include q_flex(flex-start);
		margin-top: $m-t-30;
		&__title {
			margin-right: 20rpx;
		}
		&__input {
			flex: 1;
		}
	}
	&__content {
		margin-top: $m-t-30;
	}
	&__cell {
		margin-top: $m-t-30;
		&__icon {
			width: 50rpx;
			height: 50rpx;
			margin-right: 10rpx;
		}
	}
	&__settings {
		@include q_flex(center);
		margin-top: 30rpx;
		&__text {
			margin-left: 20rpx;
			@include q_font_style(28rpx, 700, #0562ed);
		}
	}
}

.title {
	@include q_font_style(28rpx, 700, #000);
}
.fixed-btn {
	position: fixed;
	/* #ifdef APP */
	bottom: 20rpx;
	/* #endif */
	/* #ifndef APP */
	bottom: 110rpx;
	/* #endif */
	left: 0rpx;
	width: 680rpx;
	margin-left: 40rpx;
	margin-right: 40rpx;
	@include q_font_style(28rpx, 500, #fff);
	text-align: center;
	background-color: #0265fe;
	border-radius: 20rpx;
}
.action-wrap {
	@include q_flex();
	flex-direction: column;
	line-height: 100rpx;
	&__ai {
		height: 100rpx;
		@include q_flex();
		&__img {
			width: 150rpx;
			height: 50rpx;
		}
	}
	&__album {
	}
}
.tag-active {
	color: #000;
}
.btn-active {
	background-color: #abcaf8;
}
.improvement {
	width: 150rpx;
	height: 40rpx;
}
.improvement-active {
	opacity: 0.3;
}
</style>
