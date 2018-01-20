import VueRouter from 'vue-router'
import {routes} from './router'

export const router = new VueRouter({routes})

router.beforeEach((to, from, next) => {
  console.log('去：' + to.path)
  next()
})
