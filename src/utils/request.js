import axios from 'axios'
import { Message, Loading } from 'element-ui'
const ConfigBaseURL = 'http://admin.welldebon.com/' //默认路径，这里也可以使用env来判断环境
let loadingInstance = null //这里是loading
//使用create方法创建axios实例
export const Service = axios.create({
    timeout: 120000, // 请求超时时间
    baseURL: ConfigBaseURL,
    method: 'post',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
})
// 添加请求拦截器
Service.interceptors.request.use(config => {
    if (config.url != 'api/content/submit_message') {
        loadingInstance = Loading.service({
            lock: true,
            text: 'loading...',
            background: 'rgba(255, 255, 255, 0.2)'

        })
    } else {
        loadingInstance = null
    }

    return config
})
// 添加响应拦截器
Service.interceptors.response.use(response => {
    if (loadingInstance) {
        loadingInstance.close()

    }
    // console.log(response)
    return response.data
}, error => {
    const msg = error.Message !== undefined ? error.Message : ''
    Message({
        message: '网络错误' + msg,
        type: 'error',
        duration: 3 * 1000
    })
    if (loadingInstance) {
        loadingInstance.close()

    }
    return Promise.reject(error)
})