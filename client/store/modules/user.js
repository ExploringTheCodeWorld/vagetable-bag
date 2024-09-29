import {
	defineStore
} from 'pinia'
import {
	login,
	logout,
	userInfo as userInfoData
} from '@/api/user.js'
import {
	getToken,
	setToken,
	removeToken,
	removeSyncToken
} from '@/utils/auth';
import config from '@/config.js'
const useUserStore = defineStore('user', {
	state: () => ({
		token: getToken(),
		userInfo: {}
	}),
	actions: {
		logOn(data) {
			return new Promise((resolve, reject) => {
				login(data).then(res => {
					this.loginReset(res)
					console.log('res',res);
					resolve(res)
				}).catch(error => {
					console.log('error?',error);
					reject(error)
				})
			})
		},
		getInfo() {
			return new Promise((resolve, reject) => {
				userInfoData().then(res=>{
					console.log('res',res);
					res.data.userAvatar = config.image_url + res.data.userAvatar
					this.userInfo = res.data
					resolve()
				}).catch(err=>{
					reject(err)
				})
			})
		},
		logOut() {
			return new Promise(async (resolve, reject) => {
				try {
					const res = await logout();
					console.log('res',res);
					await removeSyncToken();
					this.token = '';
					this.userInfo = {};
					resolve()
				} catch (error) {
					throw error;
				}
			})
		},
		loginReset(res) {
			console.log('res', res);
			setToken(res.data)
			this.token = res.data
		}
	}
});

export default useUserStore;