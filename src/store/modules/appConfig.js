import * as types from '../mutations'
import http from "../../utils/http";

const state = {
  slidingState: false,//侧滑菜单状态
  songList: [1220480,],
  currentMusic: {
    id: '1220480',
    img: '',
    name: '',
    author: '',
    url: 'http://m10.music.126.net/20180128000028/8345f6596005482687f1c4cbeb99e950/ymusic/12dd/b145/d777/4934080970ddff491503fbc35920da9c.mp3',
    size: 0,
  },//当前播放中/暂停中的音乐
  songState: false,//当前音乐的播放状态
}

const getters = {
  SlidingState: state => state.slidingState,
  SongList: state => state.songList,
  SongState: state => state.songState,
  Music: state => state.currentMusic
}

const actions = {
  //context.commit 简写（参数解构）
  setSlidingState: ({commit}) => {
    console.log('--->' + !state.slidingState)
    commit(types.SET_SILIDING, !state.slidingState)
  },
  getMusic: ({commit}, id) => {
    http.get('music/url', {id: id}, '获取音乐详情', function (data) {
      commit(types.GET_SONG_INFO, data)
    }, function (err) {
    })
  },
  setMusic: ({commit},obj) => {//设置音乐信息
    commit(types.SET_SONG_INFO, obj)

  },
  setSongState: ({commit}, isPlay) => {
    console.log('歌曲状态--->' + isPlay)
    commit(types.SET_SONG_STATE, isPlay)
  },
}
const mutations = {
  [types.SET_SILIDING](state, isShow) {
    state.slidingState = isShow
  },
  [types.GET_SONG_INFO](state, data) {
    state.currentMusic.url = data.data[0].url
    state.currentMusic.size = data.data[0].size
  },

  [types.SET_SONG_INFO](state, obj) {
    state.currentMusic.img = obj.img
    state.currentMusic.name = obj.name
    state.currentMusic.author = obj.author
  },
  [types.SET_SONG_STATE](state, isPlay) {
    state.songState = isPlay
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
