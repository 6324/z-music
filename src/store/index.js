import Vue from 'vue'
import Vuex from 'vuex'
import appConfig from './modules/appConfig'
import search from './modules/search'
import fpcy from './modules/fpcy'
import music from './modules/music'
import main from './modules/main'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      appConfig,
      main,
      music,
      search,
      fpcy
    }
  }
)
