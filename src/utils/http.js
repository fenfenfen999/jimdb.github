import axios from 'axios'
import cookie from './cookie.js'
import gConfig from '../config'

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

axios.interceptors.response.use(response => {
  // 接口数据返回之后response拦截
  if (response.status !== 200) {
    let message = response.toString() || response.status + ':请求失败'
    return Promise.reject(message)
  }
  let rst = response.data
  if (rst && rst.sso_redirect_url) {
    cookie.del('sso.jd.com', '/', '.jd.com')
    location.href = rst.sso_redirect_url + location.href
  }
  return response.data
}, err => {
  return Promise.reject(err)
})

function checkStatus (res) {
  // if (res.status === 200 || res.status === 304) {
  return res
  // }
  // return {
  //   data: {
  //     code: -404,
  //     message: res.statusText,
  //     data: ''
  //   }
  // }
}

function checkCode (res) {
  if (res.status === -500) {
    window.location.href = '/backend'
  } else if (res.status === -400) {
    window.location.href = '/'
  } else if (res.status !== 200) {
    // createStore().dispatch('global/showMsg', res.data.message)
  }
  return res
}

export default {
  post (url, params, data, config) {
    config = config || {}
    const options = Object.assign({}, config, {
      method: 'post',
      url: gConfig.api + url,
      params,
      data,
      timeout: config.timeout,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    return axios(options).then(checkStatus).then(checkCode)
  },
  get (url, params, config) {
    config = config || {}
    const options = Object.assign({}, config, {
      method: 'get',
      url: gConfig.api + url,
      params,
      timeout: config.timeout,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    return axios(options).then(checkStatus).then(checkCode)
  },
  put (url, params, data, config) {
    config = config || {}
    const options = Object.assign({}, config, {
      method: 'put',
      url,
      params,
      data
    })
    return axios(options).then(response => {
      return response
    }).catch(error => {
      return Promise.reject(error)
    })
  },
  delete (url, params, data, config) {
    config = config || {}
    const options = Object.assign({}, config, {
      method: 'delete',
      url,
      params,
      data
    })
    return axios(options).then(response => {
      return response
    }).catch(error => {
      return Promise.reject(error)
    })
  },
  all (...array) {
    return Promise.all(array).then(resList => {
      return resList
    }).catch(error => {
      return Promise.reject(error)
    })
  }
}
