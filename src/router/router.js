import index from '../view/index'

import MainMusic from '../view/MainMusic'
import MainVideo from '../view/MainVideo'
import MainDj from '../view/MainDj'

import MainPersonalized from '../view/personalized/MainPersonalized'

const main = {
  path: '/',
  name: 'index',
  component: index,
  children: [
    {
      path: '/music',
      name: 'music',
      component: MainMusic
    },
    {
      path: '/vedio',
      name: 'vedio',
      component: MainVideo
    },
    {
      path: '/dj',
      name: 'dj',
      component: MainDj
    },
  ]
}

const personalized = {

  path: '/personalized/:id',
  name: 'personalized',
  component: MainPersonalized

}

export const routes = [main,personalized]
