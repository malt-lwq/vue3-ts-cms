// 1.手动切换环境(不推荐)
// const BASE_URL = 'http://coderwhy.org/test'
// const BASE_NAME = 'coderwhy'

// const BASE_URL = 'http://coderwhy.org/prod'
// const BASE_NAME = 'coderwhy'

// const BASE_URL = 'http://coderwhy.org/dev'
// const BASE_NAME = 'coderwhy'

// 2.根据process.env.NODE_ENV
// 开发环境：development
// 生产环境：production
// 测试环境：test
let BASE_URL = ''
// let BASE_NAME = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/production'
} else {
  BASE_URL = 'http://coderwhy.org/test'
}

export { BASE_URL }

// 3.在独立的配置文件中配置环境
