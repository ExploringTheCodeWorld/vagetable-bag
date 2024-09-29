import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import store from './store/index.js'
import tabbar from '@/components/tabbar/tabbar.vue'
const devices = uni.getSystemInfoSync()
export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.$devices = devices
	app.use(store)
	app.component(tabbar)
  return {
    app
  }
}
// #endif