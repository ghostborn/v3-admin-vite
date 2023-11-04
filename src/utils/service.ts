import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios"

import { ElMessage } from "element-plus"
import {get, merge} from 'lodash-es'
import {getToken} from "@/utils/cache/cookies";

/** 创建 axios 实例 */
function createService(){
  const service = axios.create()
  // 请求拦截
  service.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject()
  )
  // 响应拦截
  service.interceptors.response.use(
    (response) => {
      const apiData = response.data
      // 二进制数据直接返回
      const responseType = response.request?.responseType
      if(responseType === 'blob' || responseType === 'arraybuffer') return apiData
      const {code} = apiData
      if(code === undefined){
        ElMessage.error('非本系统的接口')
        return Promise.reject(new Error('非本系统的接口'))
      }
      switch (code) {
        case 0:
          // 本系统采用code === 0来表示没有业务错误
          return apiData
        case 401:
          //Token过期
        default:
          ElMessage.error(apiData.message || 'Error')
          return Promise.reject(new Error('Error'))
      }
    },
    (error) =>{
      // status 是HTTP状态码
      const status = get(error,'response.status')
      switch (status){
        case 400:
          error.message = '请求错误'
          break
        case 401:
          //Token过期
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求地址出错'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP 版本不受支持'
          break
        default:
          break
      }
      ElMessage.error(error.message)
      return Promise.reject(error)
    }
  )
  return service
}

/**创建请求方法*/
function createRequest(service:AxiosInstance){
  return function <T>(config:AxiosRequestConfig):Promise<T>{
    const token = getToken()
    const defaultConfig = {
      headers:{
        Authorization: token ? `Bearer ${token}` : undefined,
        'Content-Type': 'application/json'
      },
      timeout: 5000,
      baseURL: import.meta.env.VITE_BASE_API,
      data:{}
    }
    const mergeConfig = merge(defaultConfig,config)
    return service(mergeConfig)
  }
}
/** 用于网络请求的实例*/
const service = createService()
export const request = createRequest(service)
