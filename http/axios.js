/**
 *@author : lifeng
 * @time: 20180906
 * @func: axios 的基本配置、拦截、查看是否已登录【接口权限】
 * */
import {errorMsg} from '@/tools/dialog'
// 引用 axios
import axios from 'axios'
export const root = process.env.NODE_ENV.toString() !== 'production' ? process.env.API_ROOT.toString() : '';
// 默认基本配置
let set = {
  // timeout: 5000, // 在超时前，所有请求都会等待 5 秒；超时时间【请求超过 `timeout` 的时间，请求将被中断】
  responseType: 'json', // 响应数据类型
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
}
if (root !== '') {
  set.baseURL = root// 因为我本地做了反向代理
}
// 默认基本配置
const Axios = axios.create(set);
// axios拦截器
// 请求拦截器
Axios.interceptors.request.use(request => {
  // Tip: 1:请求开始的时候可以结合 vuex 开启全屏的 loading 动画
  // Tip: 2 :带上 token , 可以结合 vuex 或者重 localStorage
  // if (store.state.token) {
  //   request.headers.Authorization = store.state.token;
  // }
  return request
}, error => {
  // Tip:1 关闭loadding
  console.log('request error:')
  console.log(error)
  if (error || error.data.error.message) {
    errorMsg({msg: error || error.data.error.message})
  }
  return Promise.reject(error)
})
// 添加响应拦截器
Axios.interceptors.response.use(response => {
  let data
  // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
  if (response.data === undefined) {
    data = response.request.responseText
  } else {
    data = response.data
  }
  // // 根据返回的code值来做不同的处理（和后端约定）【公共的code处理】
  // switch (data.code) {
  //   case '200':
  //     break;
  //   default:
  // }
  console.log('response ok')
  // // 对响应数据做些事
  // if (data.code !== 200) { // 特殊的code情况
  //   errorMsg({msg: '错了'})
  //   return Promise.reject(data);
  // }
  return data
}, error => {
  // 【监测用户登录是否过期】,下面跳转到登录页
  // router.push({
  //   path: '/login'
  // });
  let msg = ''
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        msg = '请求错误'
        break
      case 401:
        msg = '401'
        break
      case 403:
        msg = '拒绝访问'
        break
      case 404:
        msg = `请求地址出错: ${error.response.config.url}`
        break
      case 408:
        msg = '请求超时'
        break
      case 500:
        msg = '服务器内部错误'
        break
      case 501:
        msg = '服务未实现'
        break
      case 502:
        msg = '网关错误'
        break
      case 503:
        msg = '服务不可用'
        break
      case 504:
        msg = '网关超时'
        break
      case 505:
        msg = 'HTTP版本不受支持'
        break
      default:
    }
  }
  console.log('error response')
  return Promise.reject(msg || error)
});
export default Axios
