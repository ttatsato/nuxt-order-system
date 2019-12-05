import axios from 'axios'
const debug = process.env.NODE_ENV !== 'production'

const RequestService = axios.create({
  baseURL: process.env.VUE_APP_MOCK_API,
  timeout: 5000
})

// Request interceptors
RequestService.interceptors.request.use(
  (config) => {
    if (debug) {
      // @ts-ignore
      console.group(`>>> REQUEST [${config.method.toUpperCase()}] ${config.url}`)
      console.dir(config)
      console.groupEnd()
    }
    // you can add other custom headers here
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response interceptors
RequestService.interceptors.response.use(
  (response) => {
    if (debug) {
      // @ts-ignore
      console.group(`>>> RESPONSE [${response.config.method.toUpperCase()}] ${response.config.url}`)
      console.dir(response)
      console.groupEnd()
    }
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     MessageBox.confirm(
    //       '你已被登出，可以取消继续留在该页面，或者重新登录',
    //       '确定登出',
    //       {
    //         confirmButtonText: '重新登录',
    //         cancelButtonText: '取消',
    //         type: 'warning'
    //       }
    //     ).then(() => {
    //       UserModule.FedLogOut().then(() => {
    //         location.reload() // To prevent bugs from vue-router
    //       })
    //     })
    //   }
    //   return Promise.reject(new Error('error with code: ' + res.code))
    // } else {
    //   // case success
    //   return response.data
    // }
    return response
  },
  (error) => {
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)
export default RequestService
