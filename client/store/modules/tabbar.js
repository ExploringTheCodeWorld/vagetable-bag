import {
	defineStore
} from 'pinia'


const useTabbarStore = defineStore('tabbar', {
	state: () => ({
		current: 0,
		tabbarList: [{
				pagePath: '/pages/index/index',
				iconPath: '/static/images/index/chat-n.png',
				selectedIconPath: '/static/images/index/chat-y.png',
				text: '对话'
			},
			{
				pagePath: '/pages/find/find',
				iconPath: '/static/images/index/search-n.png',
				selectedIconPath: '/static/images/index/search-y.png',
				text: '发现'
			},
			{
				pagePath: '/pages/establish/establish',
				iconPath: '/static/images/index/chuangjian.png',
				selectedIconPath: '/static/images/index/chuangjian.png',
				text: '创建'
			},
			{
				pagePath: '/pages/notice/notice',
				iconPath: '/static/images/index/heart-n.png',
				selectedIconPath: '/static/images/index/heart-y.png',
				text: '通知'
			},
			{
				pagePath: '/pages/mine/mine',
				iconPath: '/static/images/index/mine-n.png',
				selectedIconPath: '/static/images/index/mine-y.png',
				text: '我的'
			}
		]
	}),
	getters: {

	},
	actions: {
		setCurrent(index) {
			this.current = index
		},
		findPage(path) {
			return new Promise((resolve, reject) => {
				for (let [index, item] of this.tabbarList.entries()) {
					if (item.pagePath === path) {
						this.current = index;
						resolve(true);
						return; 
					}
				}
				this.current = 0;
				resolve(false);
			});

		}
	},
});

export default useTabbarStore;