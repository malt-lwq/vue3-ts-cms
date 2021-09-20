import App from './App.vue'
import { createApp } from 'vue'

import { registerApp } from './global'

// import './service/axios_demo'
import wqRequest from './service'
import store from './store'
import router from './router'

const app = createApp(App)

// 注册element-plus/其他。。。

registerApp(app)
app.use(store)
app.use(router)
app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
wqRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的拦截')
      return config
    }
  }
})

// wqRequest.request({
//   url: '/home/multidata',
//   method: 'GET'
// })
