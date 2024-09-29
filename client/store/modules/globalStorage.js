import {
	defineStore
} from 'pinia'

import config from '@/config.js';
import {
	SETTINGS
} from '@/utils/constant.js'
const defaultValues = {
	
}
const useGlobalStorageStore = defineStore('globalStorage', {
	state: () => ({
		...Object.keys(SETTINGS).reduce((acc, key) => {
			const storageKey = SETTINGS[key];
			acc[storageKey] = uni.getStorageSync(storageKey) || defaultValues[storageKey];
			return acc;
		}, {})
	}),
	actions: {
		getValue(key) {
			return this[key];
		},
		setValue(key,value) {
			if (Object.values(SETTINGS).includes(key)) {
				uni.setStorageSync(key, value);
				this[key] = value;
			}
		}
	}
});
export default useGlobalStorageStore;