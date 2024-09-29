import {
	defineStore
} from 'pinia'
import {
	ThemeStatus
} from '@/utils/constant.js'
import themeColor from '@/utils/theme.js'
const useThemeStore = defineStore('theme', {
	state: () => ({
		themeStatus: uni.getStorageSync(ThemeStatus) || 'light',
	}),
	actions: {
		storageTheme(value) {
			this.themeStatus = value
			uni.setStorageSync(ThemeStatus, value)
			this.changeNavgationBarColor()
		},
		changeNavgationBarColor() {
			const {
				themeStatus
			} = this
			uni.setNavigationBarColor({
				frontColor: themeColor[themeStatus].color,
				backgroundColor: themeColor[themeStatus].background,
				animation: {
					duration: 0,
					timingFunc: 'easeIn'
				}
			})
			// #ifdef APP
			const tabBarPages = ['pages/index/index', 'pages/find/find', 'pages/notice/notice',
				'pages/mine/mine'
			]
			const currentPages = getCurrentPages()
			const currentPage = currentPages[currentPages.length - 1]
			if (tabBarPages.includes(currentPage.route)) {
				uni.setTabBarStyle({
					color: themeColor[themeStatus].color,
					selectedColor: themeColor[themeStatus].color,
					backgroundColor: themeColor[themeStatus].background,
					borderStyle: themeColor[themeStatus].color
				});
			}
			// #endif

		}
	}
});

export default useThemeStore;