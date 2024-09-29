import request from '@/utils/request.js'

export function addedList() {
	return request({
		url: '/model/addedList',
		method: 'get',
	})
}

export function chatHistory(query) {
	return request({
		url: '/model/records',
		method: 'get',
		params:query
	})
}

export function clearHistory(modelId) {
	return request({
		url: `/ai/clear/${modelId}`,
		method: 'delete',
	})
}

export function updatePinned(data) {
	return request({
		url: `/model/pinned`,
		method: 'put',
		data,
	})
}

export function deleteModel(modelId) {
	return request({
		url: `/model/${modelId}`,
		method: 'delete',
	})
}

export function detailModel(modelId) {
	return request({
		url: `/model/detail/${modelId}`,
		method: 'get',
	})
}

