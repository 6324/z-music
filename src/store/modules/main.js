import * as types from '../mutations'
import http from '../../utils/http'
import Vue from 'vue'

//首页banner、推荐歌单
const state = {
  banners: [],
  personalizeds: []
}

const getters = {
  GetBanner: state => {
    let swipList = []
    for (var i = 0; i < state.banners.length; i++) {
      let banner = {}
      banner.url = 'javascript:'
      banner.img = state.banners[i].pic
      swipList.push(banner)
    }
    return swipList
  },
  GetPersonalized: state => state.personalizeds
}

const actions = {
  setBanners: ({commit}) => {
    http.get('banner', {}, 'banner', function (data) {
      commit(types.SET_BANNER, data)
      Vue.$vux.loading.hide()
    }, function (err) {
    })
  },
  setPersonalizeds: ({commit}) => {
    http.get('personalized', {}, '歌单', function (data) {
      commit(types.SET_PERSONALIZED, data)
      Vue.$vux.loading.hide()
    }, function (err) {
    })
  }
}
const mutations = {
  [types.SET_BANNER](state, data) {
    state.banners = data.banners
  },
  [types.SET_PERSONALIZED](state, data) {
    state.personalizeds = data.result
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
