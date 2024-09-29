<template>
	<theme>
		<button @click="onClick('dark')">白</button>
		<button @click="onClick('light')">黑</button>
	</theme>
</template>

<script setup>
	import { ref } from 'vue';
	import useThemeStore from '@/store/modules/theme';
	const themeStore = useThemeStore();
		const onClick = (e)=>{
			themeStore.storageTheme(e)
		}
</script>

<style>

</style>
