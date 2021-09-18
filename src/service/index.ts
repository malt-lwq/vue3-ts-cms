// service统一出口
import HYRequest from './request'
import { BASE_URL } from './request/config'

const wqRequest = new HYRequest({
  baseURL: BASE_URL
})

export default wqRequest
