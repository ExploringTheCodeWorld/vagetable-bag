<template>
	<u-popup :show="show" @close="close" round="20">
		<view class="popup">
			<u-cell-group :border="false">
				<u-cell v-for="(item, index) in dataList" @click="onClickHandler(index)" :key="item.value" :title="item.label" :border="item.border" >
					<template #value>
						<u-icon v-if="item.checkout" name="checkmark" color="#2979ff" size="20"></u-icon>
					</template>
				</u-cell>
			</u-cell-group>
		</view>
	</u-popup>
</template>

<script setup>
import { ref } from 'vue';
import {Public} from '@/utils/enum/commonEnum.js'
import useSettingsStore from '@/store/modules/settings.js'
const emit = defineEmits(['update'])
const settingsStore = useSettingsStore()
const show = ref(false);
const dataList = ref(Public.values())
const close = () => {
	show.value = false;
	emit('update')
};
const openDialog = ()=>{
	console.log('Public',Public.values());
	dataList.value.forEach((item,index,array)=>{
		item.checkout = settingsStore.selectedPublicMode == item.value
		item.border = index !== array.length - 1;
	})
	show.value = true
}
const onClickHandler = (index)=>{
	dataList.value.forEach((item, indexItem) => {
		item.checkout = indexItem === index;
		if (indexItem == index) {
			settingsStore.setPublicMode(item.value);
		}
	});
	close()
	
}
defineExpose({
	openDialog
});
</script>

<style scoped lang="scss">
	.popup{
		padding-top: 40rpx;
	}
</style>
