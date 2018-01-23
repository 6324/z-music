import * as types from '../mutations'

const state = {
  slidingState: false//侧滑菜单状态
}

const getters = {
  SlidingState: state => state.slidingState,
}

const actions = {
  //context.commit 简写（参数解构）
  setSlidingState: ({commit}) => {
    console.log('--->' + !state.slidingState)
    commit(types.SET_SILIDING, !state.slidingState)
  }
}
const mutations = {
  [types.SET_SILIDING](state,isShow) {
    state.slidingState = isShow
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
