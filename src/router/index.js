import VueRouter from 'vue-router'
import {routes} from './router'
import app from "../config/app";
import log from '../utils/log'
import  Vue from 'vue'

const router = new VueRouter({routes})
router.beforeEach((to, from, next) => {
  if (app.Debug) {
    log('路由', '去：' + to.path)
  }
  Vue.$vux.loading.show()
  next()
})

router.afterEach((to)=>{
  Vue.$vux.loading.hide()
})

export default router
