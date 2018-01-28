// import * as types from '../mutations'
// import http from '../../utils/http'
// //获取音乐详情
// const state = {
//   music: {
//     id: '1220480',
//     url: 'http://m10.music.126.net/20180128000028/8345f6596005482687f1c4cbeb99e950/ymusic/12dd/b145/d777/4934080970ddff491503fbc35920da9c.mp3',
//     size: 0,
//   }
// }
//
// const getters = {
//   Music: state => state.music
// }
//
// const actions = {
//   getMusic: ({commit}, id) => {
//     http.get('music/url', {id: id}, '获取音乐详情', function (data) {
//       commit(types.GET_SONG_INFO, data)
//     }, function (err) {
//     })
//   }
// }
// const mutations = {
//   [types.GET_SONG_INFO](state, data) {
//     console.log('设置歌曲--->'+data.data[0].url)
//     state.music= data.data[0]
//
//   }
// }
// export default {
//   state,
//   actions,
//   mutations,
//   getters
// }
