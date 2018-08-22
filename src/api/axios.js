/* eslint-disable *///Disable for process
import Vue from 'vue'
import axios from 'axios'

function setInterceptors (axiosInstance) {
  // request interceptor
  axiosInstance.interceptors.request.use(req => {
    if (process.env.NODE_ENV !== 'production') {
      console.time(req.method.toUpperCase() + ' ' + req.url)
    }
    return req
  }, error => {
    console.error(error)
    return Promise.reject(error)
  })

  // response interceptor
  axiosInstance.interceptors.response.use(res => {
    if (process.env.NODE_ENV !== 'production') {
      console.timeEnd(res.config.method.toUpperCase() + ' ' + res.config.url)
    }
    return res
  }, error => {
    console.error(error)
    if (error.code === 'ECONNABORTED') {
      console.error('网络错误，请检查网络连接刷新后重试')
    } else {
      console.error('发生了奇怪的错误')
    }
    return Promise.reject(error)
  })
}

// create axios instance
function getAxios (settings, timeout = 10000) {
  const axiosInstance = axios.create(settings)
  axios.defaults.timeout = timeout
  setInterceptors(axiosInstance)
  return axiosInstance
}

export const api = getAxios({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : '/',
  withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
