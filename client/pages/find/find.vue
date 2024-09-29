<template>
	<u-navbar title="发现" :placeholder="true" :safeAreaInsetTop="true" bgColor="#fff" :auto-back="false">
		<template #left>
			<view class=""></view>
		</template>
		<template #right></template>
	</u-navbar>
	<view class="find-wrap" v-for="(item, index) in dataList" :key="item.modelId">
		<view class="find-wrap__left">
			<image class="image" :src="item.modelImage" mode=""></image>
		</view>
		<view class="find-wrap__center">
			<view class="find-wrap__center__title">
				{{ item.modelName }}
			</view>
			<view class="find-wrap__center__content q_text_overflow_2">
				{{ item.introduce }}
			</view>
			<view class="find-wrap__center__bottom">
				<view class="find-wrap__center__bottom__icon">
					<image class="image" src="/static/icon.png" mode=""></image>
				</view>
				<view class="find-wrap__center__bottom__num">
					{{ item.modelQaCount }}
				</view>
				<view class="find-wrap__center__bottom__dot">&nbsp;·&nbsp;</view>
				<view class="find-wrap__center__bottom__auth">@{{ item.creatorName ?? 'user' }}</view>
			</view>
		</view>
		<view class="find-wrap__right" @click="rightClickHandler(item, index)">
			<image class="image" v-if="!item.isAddedByUser" src="/static/images/add.png" mode=""></image>
			<image class="image" v-else src="/static/images/yes.png" mode=""></image>
		</view>
	</view>
	<u-loadmore  :status="status" loading-text="加载中..." loadmore-text="上拉加载更多" nomore-text="已经到底了~"  />
	<tabbar></tabbar>
</template>

<script setup>
import { ref } from 'vue';
import { modelList, modelAdd, modelDel } from '@/api/find/index.js';
import { onShow, onReachBottom, onPullDownRefresh } from '@dcloudio/uni-app';
import config from '@/config';
import useUserStore from '@/store/modules/user';
import { storeToRefs } from 'pinia';
import { toast } from '@/utils/common';
import useTabbarStore from '@/store/modules/tabbar';
const tabbarStore = useTabbarStore()
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);
const queryParams = ref({
	pageSize: 10,
	pageNum: 1,
	modelName: ''
});
const dataList = ref([]);
const total = ref(0);
const status = ref('loadmore');
const getList = (isLoading = true) => {
	modelList(queryParams.value).then((res) => {
		console.log('res', res);

		if (res.data.list.length > 0) {
			res.data.list.forEach((item) => {
				item.modelImage = config.image_url + item.modelImage;
			});
		}
		if (isLoading) {
			dataList.value = res.data.list;
		} else {
			dataList.value = [...dataList.value, ...res.data.list];
		}
		total.value = res.data.total;
		if (total.value <= 10) status.value = 'nomore';
		else status.value = 'loadmore';
		uni.stopPullDownRefresh();
	});
};
const searchHandler = ()=>{
	queryParams.value.pageNum = 1
	getList()
}
const rightClickHandler = async (item, index) => {
	// console.log('item',item.isAddedByUser);
	dataList.value[index].isAddedByUser = !dataList.value[index].isAddedByUser;
	const data = {
		modelId: item.modelId,
		userId: userInfo.value.userId
	};
	console.log('item', item.isAddedByUser);
	try {
		if (item.isAddedByUser) await modelAdd(data);
		else await modelDel(item.modelId);
	} catch (e) {}
};
onShow(() => {
	getList();
		tabbarStore.setCurrent(1)
});
onReachBottom(() => {
	queryParams.value.pageNum++;
	status.value = 'loading';
	console.log('--->', dataList.value.length);
	console.log('--->', total.value);
	if (total.value <= dataList.value.length) {
		status.value = 'nomore';
		return;
	} else {
		getList(false);
	}
});
onPullDownRefresh(() => {
	searchHandler();
});
</script>

<style>
page {
	padding: 0 40rpx;
	box-sizing: border-box;
}
</style>
<style scoped lang="scss">
.find-wrap {
	@include q_flex();
	margin-top: 20rpx;
	&__left {
		width: 160rpx;
		height: 160rpx;
		margin-right: 20rpx;
		border-radius: 50%;
		overflow: hidden;
	}
	&__center {
		flex: 1;
		&__title {
			@include q_font_style(26rpx, 900, #000);
		}
		&__content {
			margin-top: 10rpx;
			@include q_font_style(24rpx, 400, #030303);
		}
		&__bottom {
			margin-top: 10rpx;
			@include q_font_style(24rpx, 400, #989898);
			@include q_flex(flex-start);
			&__icon {
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 10rpx;
			}
			&__num {
			}
			&__dot {
			}
			&__auth {
			}
		}
	}
	&__right {
		width: 60rpx;
		height: 60rpx;
	}
}
</style>
