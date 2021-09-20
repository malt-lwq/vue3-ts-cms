import axios from 'axios'
import type { AxiosInstance } from 'axios'

import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

import type { WQRequestInterceptors, WQRequestConfig } from './type'

class WQRequest {
  instance: AxiosInstance
  interceptors?: WQRequestInterceptors
  loading?: ILoadingInstance
  showLoading: boolean

  constructor(config: WQRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true

    // 从config中取出的拦截器是对应的实例对对象的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例都具有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器，请求成功拦截')
        // 添加loading加载动画
        if (this.showLoading == true) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载中',
            background: 'rgba(0,0,0,.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器，响应成功拦截')
        this.loading?.close()
        return res
      },
      (err) => {
        return err
      }
    )
  }

  // 对某个请求单独使用拦截
  request(config: WQRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default WQRequest
