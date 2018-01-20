import axios from 'axios'
import {Api} from "../config/api-config";
import {Debug} from "../config/app";
import log from '../utils/log'

export const get = (url, params, method, ok, err) => {

  if (Debug) {
    log('访问网络：', method)
  }

  let config = {
    method: 'get',
    url: Api.baseUrl.concat(url),
    params: params,
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 1000 * 10 //0表示无超时时间
  }

  axios(config)
    .then(response => {
      ok(response.data)
      // console.log(response.data)
      // console.log(response.status)
      // console.log(response.statusText)
      // console.log(response.config)
    })
    .catch(erro => {
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
