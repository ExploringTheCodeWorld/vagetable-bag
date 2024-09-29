import request from '@/utils/request.js'


// 模型列表
export function modelList(query) {
	return request({
		url: '/model/list',
		method: 'get',
		params:query,
	})
}


// 添加模型
export function modelAdd(data) {
	return request({
		url: '/model/add',
		method: 'post',
		data,
	})
}

export function modelDel(modelId) {
	return request({
		url: `/model/remove/${modelId}`,
		method: 'delete',
	})
}