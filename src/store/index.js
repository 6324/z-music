import Vue from 'vue'
import Vuex from 'vuex'
import appConfig from './modules/appConfig'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      appConfig,
    }
  }
)
