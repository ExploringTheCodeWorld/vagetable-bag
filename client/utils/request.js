import {getToken} from '@/utils/auth.js'
import config from '@/config'
import {toast,showConfirm,tansParams} from '@/utils/common'
import errorCode from '@/utils/error'


const baseUrl = config.base_url
const request = options =>{
	
	options.header = options.header || {}
	if (getToken()) {
		options.header['Authorization'] = 'Bearer ' + getToken()
	}
	if (options.params) {
		let url = options.url + '?' + tansParams(options.params)
		url = url.slice(0, -1)
		options.url = url
	}
	return new Promise((resolve,reject)=>{
		
		uni.request({
			method: options.method || 'get',
			timeout: options.timeout || config.request_time_out,
			url: options.baseUrl || baseUrl + options.url,
			data: options.data,
			header: options.header,
			dataType: 'json'
		}).then(res=>{
			const code = res.data.code || 200
			const msg = errorCode[code] || res.data.msg || errorCode['default']
			if (code === 401) {
					uni.reLaunch({
						url: '/pages/login'
					})
				reject('无效的会话，或者会话已过期，请重新登录。')
			} else if (code === 500) {
				toast(msg)
				reject('500')
			} else if (code !== 200) {
				toast(msg)
				reject(code)
			} else {
				resolve(res.data);
			}
		})
		
	})
	
}

export default request