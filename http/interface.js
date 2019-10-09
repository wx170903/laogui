/**
 *@author : lifeng
 * @time: 20180906
 * @func: 集中管理路由，所有的接口地址【整个应用用到的接口，方便管理】
 * */
import $http from './index'
// import {errorMsg} from '@/tools/dialog'
// 获取用户信息
export async function getUserInfo (data = {}) {
  try {
    let res = await $http.get('/account/getUserInfo', data)
    return res
  } catch (e) {
    console.log(e)
    return Promise.reject(e)
  }
}
// 获取路由
export async function getMenu (data = {}) {
  try {
    let res = await $http.get('/Menu/getMenus', data)
    return new Promise(resolve => {
      resolve(res)
    })
  } catch (e) {
    console.log(e)
    return Promise.reject(e)
  }
}
// 登录
export async function postLogin (data = {}) {
  try {
    let res = await $http.post('/account/login', data)
    return res
  } catch (e) {
    console.log(e)
    return Promise.reject(e)
  }
}
// 登出
export async function postLogout (data = {}) {
  try {
    let res = await $http.post('/account/logout', data)
    return new Promise(resolve => {
      resolve(res)
    })
  } catch (e) {
    console.log(e)
    return Promise.reject(e)
  }
}
// account 账号相关的接口
// 修改密码
export async function postChangePwd (data = {}) {
  try {
    let res = await $http.post('/account/changePassword', data)
    return new Promise(resolve => {
      resolve(res)
    })
  } catch (e) {
    console.log(e)
    return Promise.reject(e)
  }
}
// 注册
export async function postRegister (data = {}) {
  try {
    let res = await $http.post('/Account/RegisterPost', data)
    return new Promise(resolve => {
      resolve(res)
    })
  } catch (e) {
    console.log(e)
    return Promise.reject(e)
  }
}
// 忘记密码
// 发送验证码
export async function postForgetPwdCode (data = {}) {
  try {
    let res = await $http.post('/Account/GenerateFindPasswordCode', data)
    return new Promise(resolve => {
      resolve(res)
    })
  } catch (e) {
    console.log(e)
    return Promise.reject(e)
  }
}
// 验证
export async function postForgetPwdVerify (data = {}) {
  try {
    let res = await $http.post('/Account/ValidateFindPasswordCode', data)
    return new Promise(resolve => {
      resolve(res)
    })
  } catch (e) {
    console.log(e)
    return Promise.reject(e)
  }
}
// 重置密码
export async function postForgetPwdReset (data = {}) {
  try {
    let res = await $http.post('/Account/ResetPassword', data)
    return new Promise(resolve => {
      resolve(res)
    })
  } catch (e) {
    console.log(e)
    return Promise.reject(e)
  }
}
// 获取部门
export async function getDepts (data = {}) {
  try {
    let res = await $http.get('/department/searchDeptList', data)
    return new Promise(resolve => {
      resolve(res)
    })
  } catch (e) {
    console.log(e)
    return Promise.reject(e)
  }
}
