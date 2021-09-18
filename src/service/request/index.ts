import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

class WQRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default WQRequest
