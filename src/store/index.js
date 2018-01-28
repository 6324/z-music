import Vue from 'vue'
import Vuex from 'vuex'
import appConfig from './modules/appConfig'
// import music from './modules/music'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      appConfig,
      // music,
    }
  }
)
