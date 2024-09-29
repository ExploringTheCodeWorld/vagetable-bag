import request from '@/utils/request.js'


// 模型列表
export function mineModelList() {
	return request({
		url: '/model/modelList',
		method: 'get',
	})
}
