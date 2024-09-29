import {
	defineStore
} from 'pinia'

const useModelStore = defineStore('model', {
	state: () => ({
		createModel: {}
	}),
	actions: {
		setCreateModel(data) {
			this.createModel = data
		},
		getCreateModel() {
			return this.createModel
		}
	}
});
export default useModelStore;