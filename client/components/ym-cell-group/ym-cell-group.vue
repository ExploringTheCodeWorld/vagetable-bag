<template>
	<view class="ym-cell-group" :style="customStyle">
		<slot></slot>
	</view>
</template>

<script setup>
	const props = defineProps({
		customStyle:{
			type:Object,
			defautl:()=>{}
		}
	})
</script>

<style scoped lang="scss">
	.ym-cell-group{
		overflow: hidden;
	}
</style>