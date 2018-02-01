import * as types from '../mutations'
import http from '../../utils/http'
//获取音乐详情
const state = {
  searchList: []
}

const getters = {
  SearchSong: state => state.searchList
}

const actions = {
  searchSong: ({commit}, keywords) => {
    http.get('search', {keywords: keywords}, '搜索', function (data) {
      commit(types.SEARCH, data)
    }, function (err) {
    })
  }
}
const mutations = {
  [types.SEARCH](state, data) {
    state.searchList = data.result.songs
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
