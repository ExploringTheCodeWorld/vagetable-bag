import config from '@/config.js'
import {
	getToken
} from '@/utils/auth.js'
const uploadFile = (filPath, apiPath = '/upload/image') => {

	return new Promise((resolve, reject) => {
		const token = getToken();
		uni.uploadFile({
			url: config.base_url + apiPath,
			header: {
				authorization: 'Bearer ' + token,
			},
			name: 'file',
			filePath: filPath,
			success: (res) => {
				console.log('upload->', res);
				const result = JSON.parse(res.data).data
				resolve(result)
			},
			fail: (err) => {
				reject(err)
			}
		});
	})

}


export default uploadFile