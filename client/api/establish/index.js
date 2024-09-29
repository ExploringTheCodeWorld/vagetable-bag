import request from '@/utils/request.js'


// 创建智能体
export function createModel(data) {
	return request({
		url: '/model',
		method: 'post',
		data,
	})
}
// 上传图片
export function uploadImage(data) {
	return request({
		url: '/upload/image',
		method: 'post',
		data,
	})
}
export function aiRoleplay(data) {
	return request({
		url: '/ai/analyzeImage',
		method: 'post',
		data,
	})
}
export function generateImage(data) {
	return request({
		url: '/ai/generateImage',
		method: 'post',
		data,
	})
}
export function generateText(data) {
	return request({
		url: '/ai/generateText',
		method: 'post',
		data,
	})
}
export function oneTouchImprovement(data) {
	return request({
		url: '/model/improvement',
		method: 'post',
		data,
	})
}