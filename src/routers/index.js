import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemeRouter from './cineme'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   
      movieRouter,
      cinemeRouter,
      mineRouter,
      {
        path:'/*',
        redirect:'/movie'
      }

  ]
})
