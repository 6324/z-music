// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import router from './router/index'
import App from './App'
import vuex from 'vuex'
import store from './store'
import Icon from 'vue-svg-icon/Icon.vue'
import appSetting from "./config/app";
import {LoadingPlugin} from 'vux'
Vue.component('icon', Icon)

Vue.use(VueRouter)
Vue.use(LoadingPlugin)
Vue.use(vuex)
appSetting.Debug=true

FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
