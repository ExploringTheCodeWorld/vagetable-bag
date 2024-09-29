import request from '@/utils/request.js'


// 登录
export function login(data) {
	return request({
		url: '/login',
		method: 'post',
		data,
	})
}

// 退出登录
export function logout(data) {
	return request({
		url: '/logout',
		method: 'post',
		data,
	})
}

// 用户信息
export function userInfo(data) {
	return request({
		url: '/userInfo',
		method: 'post',
		data,
	})
}
export function updateUserInfo(data) {
	return request({
		url: '/userInfo',
		method: 'put',
		data,
	})
}