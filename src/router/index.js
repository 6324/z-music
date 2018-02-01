import VueRouter from 'vue-router'
import {routes} from './router'
import app from "../config/app";
import log from '../utils/log'


const router = new VueRouter({routes})
router.beforeEach((to, from, next) => {
  if (app.Debug) {
    log('路由', '去：' + to.path)
  }
  // var musicBar = document.getElementById('music-bar');
  // console.log(musicBar)
  // if (to.name == 'music') {
  //   musicBar.style.display = 'none'
  // }else {
  //   musicBar.style.display = 'inline'
  // }

  next()
})

router.afterEach((to) => {

})

export default router
