<template>
		<u-tabbar :value="current" @change="tabbarChange" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true" activeColor="#000000" inactiveColor="#000000">
			<u-tabbar-item :text="item.text" v-for="(item, index) in tabbarList" :key="index">
				<template #active-icon>
					<image class="tabbar-icon" :src="item.selectedIconPath"></image>
				</template>
				<template #inactive-icon>
					<image class="tabbar-icon" :src="item.iconPath"></image>
				</template>
			</u-tabbar-item>
		</u-tabbar>
</template>

<script setup>
import { computed, ref } from 'vue';
import useTabbarStore from '@/store/modules/tabbar';
const tabbarStore = useTabbarStore()
const TAB_CREATE_INDEX = 2;
const current = computed(()=>tabbarStore.current);
const tabbarList = computed(()=>tabbarStore.tabbarList)
const tabbarChange = (index) => {
	// current.value = index;
	tabbarStore.setCurrent(index)
	const { pagePath } = tabbarList.value[index];
	const navData = { url: pagePath, };
	if (index === TAB_CREATE_INDEX) {
		navData.animationType = 'slide-in-bottom';
		navData.animationDuration= 300
	}else{
		navData.animationType = 'fade-in';
		navData.animationDuration= 100
	}
	uni.navigateTo({
		...navData,
	});
};
</script>

<style scoped lang="scss">
.tabbar-icon {
	width: 48rpx;
	height: 48rpx;
}
</style>
