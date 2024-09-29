<template>
	<u-overlay :show="isShow" :opacity="0" @click="isShow = false">
		<view class="dialog">
			<view class="dialog__item" @click="deleteHandler">
				<view class="dialog__item__img">
					<image class="image" src="/static/images/home/del.png" mode=""></image>
				</view>
				<view class="dialog__item__text dialog-red">删除聊天记录</view>
			</view>
			<u-divider></u-divider>
			<view class="dialog__item" v-if="userInfo.userId == modelInfo.creatorId" @click="deleteAiHandler">
				<view class="dialog__item__img">
					<image class="image" src="/static/images/home/del.png" mode=""></image>
				</view>
				<view class="dialog__item__text dialog-red">删除AI智能体</view>
			</view>
		</view>
	</u-overlay>
</template>

<script setup>
import { ref, computed } from 'vue';
import { showConfirm, toast } from '@/utils/common.js';
import { clearHistory,deleteModel } from '@/api/index/index.js';
import useUserStore from '@/store/modules/user';
import useTabbarStore from '@/store/modules/tabbar';
const tabbarStore = useTabbarStore()
const userStore = useUserStore();
const userInfo = computed(() => userStore.userInfo);
const isShow = ref(false);
const modelInfo = ref({});
const emit = defineEmits(['update']);
const deleteHandler = () => {
	showConfirm('删除后，聊天记录将不可恢复', '确定删除聊天记录？')
		.then(({ confirm }) => {
			if (confirm) {
				clearHistory(modelInfo.value.modelId).then((res) => {
					toast('聊天记录删除成功');
					emit('update');
				});
			}
		})
		.finally(() => {
			isShow.value = false;
		});
};
const deleteAiHandler = ()=>{
	showConfirm('确定删除AI智能体？')
		.then(({ confirm }) => {
			if (confirm) {
				deleteModel(modelInfo.value.modelId).then((res) => {
					uni.redirectTo({
						url:'/pages/index/index',
						success: () => {
							tabbarStore.setCurrent(0)
						}
					})
				});
			}
		})
		.finally(() => {
			isShow.value = false;
		});
}
const openDialog = (row) => {
	isShow.value = true;
	modelInfo.value = row;
	console.log('modelInfo.value ');
};
defineExpose({
	openDialog
});
</script>

<style scoped lang="scss">
.dialog {
	position: absolute;
	/* #ifdef APP */
	top: 155rpx;
	/* #endif */
	/* #ifndef APP */
	top: 85rpx;
	/* #endif */
	right: 20rpx;
	width: 260rpx;
	background-color: #fff;
	border-radius: 40rpx;
	padding: 20rpx;
	&__item {
		@include q_flex();
		&__img {
			width: 60rpx;
			height: 60rpx;
		}
	}
}
.dialog-red {
	color: #fa3e32;
}
</style>
