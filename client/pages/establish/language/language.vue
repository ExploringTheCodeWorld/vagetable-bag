<template>
	<view class="language">
		<u-cell-group :border="false">
			<u-cell v-for="(item, index) in dataList" @click="onClickHandler(index)" :key="item.id" :title="item.title" :label="item.label" :border="item.border">
				<template #value>
					<u-icon v-if="item.checkout" name="checkmark" color="#2979ff" size="20"></u-icon>
				</template>
			</u-cell>
		</u-cell-group>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import useSettingsStore from '@/store/modules/settings.js';
import { onShow } from '@dcloudio/uni-app';
const settingsStore = useSettingsStore();

const dataList = ref([
	{
		id: 1,
		title: '中文',
		label: '中文',
		checkout: true,
		border: true
	},
	{
		id: 2,
		title: 'English',
		label: '英文',
		checkout: false,
		border: false
	}
]);

onShow(() => {
	dataList.value.forEach((item) => {
		console.log('item',item);
		console.log('settingsStore.getLanguageLabel',settingsStore.getLanguageLabel);
		item.checkout = item.label == settingsStore.getLanguageLabel;
	});
});
const onClickHandler = (index) => {
	dataList.value.forEach((item, indexItem) => {
		item.checkout = indexItem === index;
		if (indexItem == index) {
			settingsStore.setLanguage(item.id);
		}
	});
};
</script>
<style>
page {
	padding: 0 40rpx;
	box-sizing: border-box;
	background-color: #f5f5f5;
}
</style>
<style scoped lang="scss">
.language {
	border-radius: 20rpx;
	background-color: #fff;
	margin-top: 40rpx;
}
:deep(.u-cell__body) {
	padding: 10rpx 30rpx;
}
</style>
