<script setup>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { getToken } from '@/utils/auth.js';
import useUserStore from '@/store/modules/user.js';
import { nextTick } from 'vue';
const userStore = useUserStore();
onLaunch((options) => {
	console.log('App Launch');

	init(options);
});
onShow(() => {
	console.log('App Show');
});
onHide(() => {
	console.log('App Hide');
});

const init = (options) => {
	if (getToken()) {
		// #ifdef APP
		plus.navigator.closeSplashscreen();
		// #endif
		userStore.getInfo();
	} else {
		uni.reLaunch({
			url: '/pages/login',
			success: () => {
				// #ifdef APP
				plus.navigator.closeSplashscreen();
				// #endif
			}
		});
	}
};
</script>

<style lang="scss">
@import '@/scss/mixin.scss';
@import '@/uni_modules/uview-plus/index.scss';
/*每个页面公共css */
</style>
