import axios from 'axios'
import qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
let fetch = axios.create({
  // baseURL: 'http://localhost:4000', // proxy有点问题，后面在配置
  timeout: 5000, // request timeout
})
fetch.interceptors.request.use(
  (config) => {
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
      if (typeof config.data !== 'string' && config.headers['Content-Type'] !== 'multipart/form-data') {
        config.data = qs.stringify(config.data)
      }
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

fetch.interceptors.response.use(
  async (data) => {
    return data
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 500) {
        console.log('服务器错误，请联系管理员处理')
      }
      return Promise.reject(error.response.data)
    } else {
      return Promise.reject(error)
    }
  },
)

export default fetch
