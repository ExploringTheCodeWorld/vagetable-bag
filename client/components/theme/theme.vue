<template>
	<view :class="[themeStore.themeStatus, 'theme-container']" :style="{ background: background, color: textColor,wrap}">
		<slot></slot>
	</view>
</template>

<script setup>
import { computed } from 'vue';
import useThemeStore from '@/store/modules/theme';
// import { ThemeStatus } from '@/utils/constant.js';
import themeColor from '@/utils/theme.js';
import {onShow} from '@dcloudio/uni-app'

const props = defineProps({
	isWrap:{
		type:Boolean,
		default:false
	}
})
const themeStore = useThemeStore();
const background = computed(() => themeColor[themeStore.themeStatus].background);
const textColor = computed(() => themeColor[themeStore.themeStatus].color);
const wrap = computed(()=>{
	return props.isWrap ? {height:'100vh',overflow:'auto'} : {}
})
onShow(()=>{
	themeStore.changeNavgationBarColor()
})
</script>

<style scoped lang="scss">

</style>
