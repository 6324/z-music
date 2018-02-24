import * as types from '../mutations'

const state = {
  slidingState: false,//侧滑菜单状态
  isLoading: false
}

const getters = {
  SlidingState: state => state.slidingState,
  GetIsLoading: state => state.isLoading,
}

const actions = {
  //context.commit 简写（参数解构）
  setSlidingState: ({commit}) => {
    commit(types.SET_SILIDING, !state.slidingState)
  },
  setIsLoading: ({commit},obj) => {
    console.log(obj)
    commit(types.SET_LOADING, obj.isLoading)
  },

}
const mutations = {
  [types.SET_SILIDING](state, isShow) {
    state.slidingState = isShow
  },
  [types.SET_LOADING](state, isLoding) {
    state.isLoading = isLoding
  },

}
export default {
  state,
  actions,
  mutations,
  getters
}
