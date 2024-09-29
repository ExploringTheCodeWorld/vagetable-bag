const TokenKey = 'caibao-Token'

export function getToken() {
  return uni.getStorageSync(TokenKey)
}

export function setToken(token) {
  return uni.setStorageSync(TokenKey, token)
}

export function removeToken() {
  return uni.removeStorageSync(TokenKey)
}

export function removeSyncToken() {
  return new Promise((resolve,reject)=>{
	  uni.removeStorage({
	  	  key:TokenKey,
		  success: () => {
		  	resolve()
		  },
		  fail:(error)=>{
			reject(error)
		  }
	  })
  })
}


