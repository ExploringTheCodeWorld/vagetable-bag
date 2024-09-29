<template>
	<view class="mine">
		<view class="status_bar"></view>
		<view class="mine__setting" @click="settingsHandler">
			<view class="mine__setting__icon">
				<image class="image" src="/static/images/mine/setting.png" mode=""></image>
			</view>
		</view>
		<view class="mine__pic">
			<image class="image" :src="userInfo.userAvatar" mode=""></image>
		</view>
		<view class="mine__title">{{userInfo.nickName}}</view>
		<view class="mine__edit" @click="updateUserInfoHandler">编辑个人资料</view>
		<view class="mine__tabs">
			<u-tabs :list="tabsList" :scrollable="false" lineColor="#000" lineWidth="150">
				<template v-slot:content="{ item, index }">
					<view class="mine__tabs__item" @click="tabsClick(index)">
						<view class="mine__tabs__item__title" :class="current == index ? 'active' : ''">
							{{ item.name }}
						</view>
						<view class="mine__tabs__item__img" v-if="item.id == 2">
							<image class="image" :src="current == 1 ? '/static/images/mine/suo-y.png' : '/static/images/mine/suo-n.png'" mode=""></image>
						</view>
					</view>
				</template>
			</u-tabs>
		</view>
		<u-divider style="padding: 0 !important; margin: 0 !important;position: relative;top:-5rpx;"></u-divider>
		<view class="mine__content">
			<view class="mine__content__empty" v-if="isEmpty" @click="handleClick">
				<view class="mine__content__empty__icon">
					<image class="image" :src="emptyIcon" mode=""></image>
				</view>
				<view class="mine__content__empty__text">{{ emptyText }}</view>
			</view>
			<view class="mine__content__model" v-if="current == 0 && modelList.length > 0">
				<view class="mine__content__model--wrap" v-for="(item,index) in modelList" :key="item.modelId">
					<view class="mine__content__model--wrap__left">
						<image class="image" :src="item.modelImage" mode=""></image>
					</view>
					<view class="mine__content__model--wrap__right">
						<view class="mine__content__model--wrap__right__title">
							{{item.modelName}}
						</view>
						<view class="mine__content__model--wrap__right__content q_text_overflow_2">
							{{item.introduce}}
						</view>
						<view class="mine__content__model--wrap__right__qa">
							<view class="mine__content__model--wrap__right__qa__img">
								<image class="image" src="/static/images/chat.png" mode=""></image>
							</view>
							<view class="mine__content__model--wrap__right__qa__num">{{item.modelQaCount}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="mine__content__collect" v-if="current == 1 && collectList.length > 0"></view>
		</view>
	</view>
	<tabbar></tabbar>
</template>

<script setup>
import { computed, ref } from 'vue';
import {mineModelList} from '@/api/mine/index.js'
import useUserStore from '@/store/modules/user';
import {onShow} from '@dcloudio/uni-app'
import config from '@/config.js'
import useTabbarStore from '@/store/modules/tabbar';
const tabbarStore = useTabbarStore()
const userStore = useUserStore();
const userInfo = computed(() => userStore.userInfo);
const current = ref(0);
const modelList = ref([]);
const collectList = ref([]);
const tabsList = ref([
	{ name: '智能体', id: 1 },
	{ name: '收藏', id: 2 }
]);
onShow(()=>{
	getModelList()
	tabbarStore.setCurrent(4)
})
const isEmpty = computed(() => {
	return (current.value === 0 && modelList.value.length === 0) || (current.value === 1 && collectList.value.length === 0);
});
const emptyIcon = computed(() => {
	return current.value === 0 ? '/static/images/mine/emo.png' : '/static/images/mine/star.png';
});
const emptyText = computed(() => {
	return current.value === 0 ? '点击创建第一个AI智能体' : '去收藏第一条消息';
});
const getModelList = ()=>{
	mineModelList().then(res=>{
		console.log('res',res);
		if(res.data.length >0){
			res.data.forEach(i=>{
				i.modelImage = config.image_url + i.modelImage
			})
		}
		modelList.value = res.data
	})
}
const handleClick = () => {
	if (current.value === 0) {
		goCreateModelHandler();
	} else {
		// 处理收藏逻辑
	}
};

const settingsHandler = () => {
	uni.navigateTo({
		url: '/pages/mine/settings/settings'
	});
};
const tabsClick = (index) => {
	current.value = index;
	if(index == 0){
		getModelList()
	}
};
const goCreateModelHandler = () => {
	uni.switchTab({
		url: '/pages/establish/establish'
	});
};

const out = () => {
	userStore.logOut().then(() => {
		console.log('退出登录成功');
		uni.reLaunch({
			url: '/pages/login'
		});
	});
};
const updateUserInfoHandler = ()=>{
	uni.navigateTo({
		url:'/pages/mine/updateUserInfo/updateUserInfo'
	})
}
</script>
<style scoped lang="scss">
.mine {
	&__setting {
		@include q_flex(flex-end);
		margin-right: 20rpx;
		margin-top: 20rpx;
		&__icon {
			width: 60rpx;
			height: 60rpx;
		}
	}
	&__pic {
		margin: 40rpx auto 0;
		width: 300rpx;
		height: 300rpx;
		border-radius: 50%;
		overflow: hidden;
	}
	&__title {
		text-align: center;
		@include q_font_style(36rpx, 900, #000);
		margin-top: 40rpx;
	}
	&__edit {
		background-color: #f5f5f5;
		box-sizing: border-box;
		padding: 20rpx 40rpx;
		width: 300rpx;
		margin: 40rpx auto 0;
		text-align: center;
		border-radius: 20rpx;
		@include q_font_style(24rpx, 500, #000);
	}
	&__tabs {
		margin-top: 20rpx;
		&__item {
			@include q_flex();
			&__img {
				width: 40rpx;
				height: 30rpx;
			}
			&__title {
				@include q_font_style(28rpx, 600, #9a9a9a);
			}
		}
	}
	&__content {
		&__empty {
			@include q_flex(center);
			flex-direction: column;
			&__icon {
				margin-top: 180rpx;
				width: 140rpx;
				height: 140rpx;
			}
			&__text {
				margin-top: 60rpx;
				@include q_font_style(24rpx, 500, #9b9b9b);
			}
		}
		&__model{
			overflow: auto;
			&--wrap{
				padding:20rpx 20rpx 0;
				box-sizing:border-box;
				@include q_flex(flex-start);
				&__left{
					width: 160rpx;
					height:160rpx;
					border-radius: 50%;
					overflow: hidden;
				}
				&__right{
					flex:1;
					margin-left:20rpx;
					@include q_flex(space-between,flex-start);
					flex-direction: column;
					&__title{
						margin-top: 15rpx;
						@include q_font_style(28rpx,900,#000);
					}
					&__content{
						margin-top: 15rpx;
						@include q_font_style(26rpx,400,#000);
					}
					&__qa{
						margin-top: 15rpx;
						@include q_flex(flex-start);
						&__img{
							width:40rpx;
							height:40rpx;
						}
						&__num{
							@include q_font_style(24rpx,400,#969696);
						}
					}
				}
			}
		}
		&__collect{}
	}
}
.active {
	color: #000;
}
</style>
