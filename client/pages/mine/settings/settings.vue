<template>
	<u-cell-group :border="false" :customStyle="customStyle">
		<u-cell icon="setting-fill" title="退出登录" :border="false" @click="logoutHandler">
			<template #icon>
				<view class="icon">
					<u-icon name="arrow-rightward" color="#fff" size="12"></u-icon>
				</view>
			</template>
		</u-cell>
	</u-cell-group>
</template>

<script setup>
import useUserStore from '@/store/modules/user';
import { showConfirm } from '@/utils/common.js';
const userStore = useUserStore();
const customStyle = {
	background: '#fff',
	borderRadius: '20rpx'
};

const logoutHandler = () => {
	showConfirm('确定退出登录').then((confirm) => {
		if (confirm) {
			userStore.logOut().then(() => {
				uni.reLaunch({
					url: '/pages/login'
				});
			});
		}
	});
};
</script>
<style lang="scss">
page {
	padding: 0 40rpx;
	box-sizing: border-box;
	background-color: #f5f5f5;
}
</style>
<style scoped lang="scss">
.icon {
	width: 50rpx;
	height: 50rpx;
	border-radius: 20rpx;
	background: #ff9503;
	@include q_flex(center);
}
</style>
