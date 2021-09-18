console.log('hhhhh')
import axios from 'axios'

// axios实例对象
// 1.模拟get请求
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})

// 2.get请求，并传入参数
axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'liaowenqian',
      age: 22
    }
  })
  .then((res) => {
    console.log(res.data)
  })

// 3.post请求
axios
  .post('http://httpbin.org/post', {
    data: {
      name: 'liaowenqian',
      age: 22
    }
  })
  .then((res) => {
    console.log(res.data)
  })

// 类型示例
// new Promise<string>((resolve) => {
//   resolve('12')
// }).then((res) => {
//   console.log(res.length)
// })

axios.defaults.baseURL = 'http://httpbin.org/'

// 4.axios.all -> 多个请求，一起返回
axios
  .all([
    axios.get('/get', { params: { name: 'liaowenqian', age: 22 } }),
    axios.post('/post', { data: { name: 'liaowenqian', age: 22 } })
  ])
  .then((res) => {
    console.log(res)
  })

axios.interceptors.request.use(
  (config) => {
    console.log('请求发送成功')

    return config
  },
  (err) => {
    console.log('请求发送失败')

    return err
  }
)

axios.interceptors.response.use(
  (res) => {
    // 取到具体的数据
    console.log('数据响应成功')

    return res.data
  },
  (err) => {
    console.log('数据响应失败')

    return err
  }
)
