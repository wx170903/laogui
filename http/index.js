/**
 *@author : lifeng
 * @time: 20180906
 * @func: axios 的二次封装 , 只需要传入url、参数data
 * */
/*eslint-disable*/
import axios from './axios'
import qs from 'qs' // 序列化请求数据，视服务端的要求
import {errorMsg} from '@/tools/dialog'
import store from "../store";
export const base = process.env.NODE_ENV === 'production' ? process.env.API_ROOT : '/api'
export const errorDeal = (url, error) => {
  return new Promise((resolve) => {
    if (error === '401') { // 未登录
      if (url === '/account/getUserInfo') { // 获取数据
        resolve(error)
      } else { // 其它接口
        store.dispatch('acLogin')
        resolve(error)
      }
    } else {
      let e = typeof error === 'object' ? '请求发生错误，请稍后再试！' : error
      errorMsg({msg: e})
      resolve(e)
    }
  })
}
const index = {
  getData (url, data = {}, config = {}, {loading = true} = {}) { // 后台返回数据没有判断值
    if (loading) {
      store.commit('setLoading', true)
    }
    Object.assign(config, {
      params: data,
      paramsSerializer: params => {
        return qs.stringify(params, {arrayFormat: 'indices'})
      }
    })
    return new Promise((resolve, reject) => {
      axios.get(base + url, config)
        .then(res => {
          (typeof res === "string") && (res = JSON.parse(res))
          store.commit('setLoading', false)
          resolve(res)
        }).catch(error => {
        console.log('error getData')
        store.commit('setLoading', false)
        errorDeal(url, error).then(e => {
            reject(e)
          })
        })
    })
  },
  postData (url, data, config = {}, {loading = true} = {}) { // 后台返回数据没有判断值
    if (loading) {
      store.commit('setLoading', true)
    }
    return new Promise((resolve, reject) => {
      axios.post(base + url, qs.stringify(data), config)
        .then(res => {
          (typeof res === "string") && (res = JSON.parse(res))
          store.commit('setLoading', false)
          resolve(res)
        }).catch(error => {
        store.commit('setLoading', false)
        errorDeal(url, error).then(e => {
            reject(e)
          })
      })
    })
  },
  get (url, data, config = {}, {msg = '操作失败！', loading = true} = {}) { // 后台返回数据有判断值
    if (loading) {
      store.commit('setLoading', true)
    }
    Object.assign(config, {
      params: data,
      paramsSerializer: params => {
        return qs.stringify(params, {arrayFormat: 'indices'})
      }
    })
    return new Promise((resolve, reject) => {
      axios.get(base + url, config)
        .then(res => {
          (typeof res === "string") && (res = JSON.parse(res))
          if (!!res && res.result) {
            store.commit('setLoading', false)
            resolve(res.data)
          } else {
            store.commit('setLoading', false)
            errorMsg({msg: res.message || msg})
            reject(new Error('fail'))
          }
        }).catch(error => {
          console.log('error get')
        store.commit('setLoading', false)
        errorDeal(url, error).then(e =>{
            reject(e)
          })
      })
    })
  },
  post (url, data, config = {}, {msg = '操作失败！', loading = true} = {}) { // 后台返回数据有判断值
    if (loading) {
      store.commit('setLoading', true)
    }
    return new Promise((resolve, reject) => {
      axios.post(base + url, qs.stringify(data), config)
        .then(res => {
          (typeof res === "string") && (res = JSON.parse(res))
          if (!!res && res.result) {
            store.commit('setLoading', false)
            resolve(res.data)
          } else {
            store.commit('setLoading', false)
            errorMsg({msg: res.message || msg})
            reject(new Error('fail'))
          }
        }).catch(error => {
          console.log('error post')
        store.commit('setLoading', false)
        errorDeal(url, error).then(e =>{
            reject(e)
          })
      })
    })
  }
}
export default index
