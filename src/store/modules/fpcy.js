import * as types from '../mutations'
import axios from 'axios'
import store from "../index";
import {Api} from "../../config/api";

const state = {
  slidingState: false,//侧滑菜单状态
  isLoading: false
}

const getters = {
  // SlidingState: state => state.slidingState,
  // GetIsLoading: state => state.isLoading,
}

const actions = {
  getFpInfo: ({commit}, params) => {
    axios.post('https://open.leshui365.com/getToken?appKey=906742a1d74a4905996983c4247fa79f&appSecret=02eee768-7525-4b79-8810-e2637506d9bb', {})
      .then(response => {
        params.token = response.data.token
        console.log(params)
        axios.post('https://open.leshui365.com/api/invoiceInfoForCom', params).then(response => {
          console.log(response)
        }).catch(err => {
          console.log('请求失败:'.concat(erro.message))
        })


      }).catch(erro => {
      console.log('请求失败:'.concat(erro.message))
    })
  },

}
const mutations = {
  [types.FPCY](state, params) {
    state.slidingState = params
  },

}
export default {
  state,
  actions,
  mutations,
  getters
}
