import axios from 'axios'
import {Api} from "../config/api";
import appSetting from "../config/app";
import log from '../utils/log'
import store from '../store'

var self=this
export const get = function (url, params, method, ok, err) {
  if(!store.state.appConfig.isLoading){
    store.commit('SET_LOADING',true)
  }

  if (appSetting.Debug) {
    log('访问网络：', method)
  }

  let config = {
    method: 'get',
    url: Api.baseUrl.concat(url),
    params: params,
    xhrFields: {
      withCredentials: true
    },
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 1000 * 10 //0表示无超时时间
  }

  axios(config).then(response => {
    ok(response.data)
    store.commit('SET_LOADING',false)

    // console.log(response.data)
    // console.log(response.status)
    // console.log(response.statusText)
    // console.log(response.config)
  })
    .catch(erro => {
      store.commit('SET_LOADING',false)
      if (erro.response) {
        // console.log(erro.response.data)
        // console.log(erro.response.status)
        // console.log(erro.response.headers)
      } else {
        err(erro.message)
        console.log('请求失败:'.concat(erro.message))
      }
    })
}

export default {
  get
}
