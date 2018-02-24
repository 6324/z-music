import index from '../view/index'

import MainMusic from '../view/MainMusic'
import MainVideo from '../view/MainVideo'
import MainDj from '../view/MainDj'

import MainPersonalized from '../view/personalized/MainPersonalized'
import MusicIndex from '../view/music/MusicInfo'
import SearchMain from '../view/search/SearchMain'
import XsIndex from '../view/xs/XsIndex'
import Fpcy from '../view/fpcy/fpcy'

const main = {
  path: '/',
  name: 'index',
  component: index,
  children: [
    {
      path: '/',
      name: 'main',
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
const search = {
  path: '/search',
  name: 'search',
  component: SearchMain
}

const music = {
  path: '/music/:id',
  name: 'music',
  component: MusicIndex
}
const xsMain = {
  path: '/xs',
  name: 'xs',
  component: XsIndex
}
const fpcy = {
  path: '/fpcy',
  name: 'fpcy',
  component: Fpcy
}


export const routes = [main, personalized, music, search, xsMain, fpcy]
