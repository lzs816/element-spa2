import { api } from './axios'
import qs from 'qs'

export const authApi = {
  // 订单
  getReq({
    param1,
    param2
  } = {}) {
    return api.get('/get', {
      params: {
        param1,
        param2
      }
    })
  },

  postReq({
    param1,
    param2
  } = {}) {
    return api.post('/post', qs.stringify({
      param1,
      param2
    }))
  }
}
