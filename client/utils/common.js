/**
 * 显示消息提示框
 * @param content 提示的标题
 */
export function toast(content) {
	uni.showToast({
		icon: 'none',
		title: content
	})
}

/**
 * 显示模态弹窗
 * @param content 提示的标题
 * @param title  提示的题头
 */
export function showConfirm(content, title = '提示', options = {
	cancelText: '取消',
	confirmText: '确定'
}) {
	return new Promise((resolve, reject) => {
		uni.showModal({
			title: title,
			content: content,
			...options,
			success: function(res) {
				resolve(res)
			}
		})
	})
}

/**
 * 参数处理
 * @param params 参数
 */
export function tansParams(params) {
	let result = ''
	for (const propName of Object.keys(params)) {
		const value = params[propName]
		var part = encodeURIComponent(propName) + "="
		if (value !== null && value !== "" && typeof(value) !== "undefined") {
			if (typeof value === 'object') {
				for (const key of Object.keys(value)) {
					if (value[key] !== null && value[key] !== "" && typeof(value[key]) !== 'undefined') {
						let params = propName + '[' + key + ']'
						var subPart = encodeURIComponent(params) + "="
						result += subPart + encodeURIComponent(value[key]) + "&"
					}
				}
			} else {
				result += part + encodeURIComponent(value) + "&"
			}
		}
	}
	return result
}


/**
 * @param {Function} fn 需要执行的方法，因this指向问题，建议不使用箭头函数，
 * @param {Number} delay 间隔时间，默认值1000
 * @param {Boolean} promptly 是否立即执行，默认false
 * **/
export const debounce = (fn, delay = 1000, promptly) => {
	let timer = null;
	return function(...args) {
		if (promptly) {
			if (!timer) fn.apply(this, args);
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(() => {
				timer = null;
			}, delay)
		} else {
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(() => {
				fn.apply(this, args);
			}, delay)
		}
	}
}
/**
 * @param {Function} fn 需要执行的方法，因this指向问题，建议不使用箭头函数，
 * @param {Number} delay 间隔时间，默认值1000
 * **/
const throttle = (fn, delay = 1000) => {
	let valid = true;
	return function(...args) {
		if (!valid) {
			return
		}
		valid = false;
		fn.apply(this, args)
		setTimeout(() => {
			valid = true
		}, delay)
	}
}

export function deepCopy(source) {
	return JSON.parse(JSON.stringify(source));
}
export function isObject(obj) {
	return Object.prototype.toString.call(obj) === '[object Object]';
}
export function sleep(ms = 1000) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}
export const getuuid = () => {
	let d = new Date().getTime();
	let timePart = ('00000000' + d.toString(16)).slice(-8);
	let randPart = ('0000' + Math.floor(Math.random() * 0xfff).toString(16)).slice(-5);
	let shortUUID = timePart + randPart;

	return shortUUID;
}
export function onDataReceived(data) {
	// 逐条处理接收到的数据
	for (const line of data.split('\n')) {
		if (line.trim()) {
			try {
				const json = JSON.parse(line);
				const content = json.content;

				// 提取 data 部分
				const dataMatch = content.match(/data: (.+)/);
				if (dataMatch) {
					const jsonData = JSON.parse(dataMatch[1]);
					const choiceContent = jsonData.choices[0].delta.content;

					// 直接返回解析的内容
					return choiceContent; // 解析后立即返回结果

					// 检查是否是结束标志
					if (jsonData.choices[0].finish_reason === "stop") {
						// 如果需要在此处理结束标志，可以在这里做其他操作
					}
				}
			} catch (error) {
				console.error("解析错误:", error);
			}
		}
	}

	// 如果没有返回，表示没有可解析的内容
	return null; // 或者其他适当的默认值
}
export function praseJson(data) {
	// 逐条处理接收到的数据
	for (const line of data.split('\n')) {
		if (line.trim()) {
			try {
				const json = JSON.parse(line);
				console.log('json', json);
				console.log('line', line);
				return json.content
			} catch (error) {
				console.error("解析错误:", error);
			}
		}
	}

	// 如果没有返回，表示没有可解析的内容
	return null; // 或者其他适当的默认值
}