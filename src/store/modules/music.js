import * as types from '../mutations'
import http from "../../utils/http";
import stringUtil from '../../utils/string'

const state = {
  songList: [1220480,],
  currentMusic: {
    id: '210434',
    img: 'http://p1.music.126.net/SOvBoGj5Bt4B3qQkKxW7eQ==/6668538022517929.jpg?param=130y130',
    name: '被遗忘的时光',
    author: '蔡琴',
    url: 'http://music.163.com/song/media/outer/url?id=210434.mp3 ',
    currentTime: 0,//当前播放时间
    duration: 0,//音乐时间
    f1: '',
    f2: ''
  },//当前播放中/暂停中的音乐
  songState: true,//当前音乐的播放状态
}

const getters = {
  SongList: state => state.songList,
  SongState: state => state.songState,
  SongInfo: state => state.currentMusic
}

const actions = {
  setSongInfo: ({commit}, id) => {//设置音乐信息
    http.get('song/detail', {ids: id}, '获取音乐详情', function (data) {
      commit(types.SET_SONG_INFO, data)
    }, function (err) {
    })
  },
  setMusicLenth: ({commit}, obj) => {//设置音乐长度 当前播放时间
    commit(types.SET_SONG_LENGTH, obj)
  },
  setSongState: ({commit}, isPlay) => {
    commit(types.SET_SONG_STATE, isPlay)
  },
}
const mutations = {
  [types.SET_SONG_INFO](state, obj) {
    //防止获取音乐403错误
    state.currentMusic.url = 'http://music.163.com/song/media/outer/url?id=' + obj.songs[0].id + '.mp3'
    state.currentMusic.img = obj.songs[0].al.picUrl
    state.currentMusic.name = obj.songs[0].name
    state.currentMusic.author = obj.songs[0].ar[0].name
  },
  [types.SET_SONG_LENGTH](state, obj) {
    state.currentMusic.currentTime = obj.currentTime
    state.currentMusic.duration = obj.duration
    state.currentMusic.f1 = stringUtil.timeFormat(obj.currentTime)
    state.currentMusic.f2 = stringUtil.timeFormat(obj.duration)
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
