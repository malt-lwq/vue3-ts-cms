import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface WQRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface WQRequestConfig extends AxiosRequestConfig {
  interceptors?: WQRequestInterceptors
  showLoading?: boolean
}
