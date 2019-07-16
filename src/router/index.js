import Vue from 'vue'
import Router from 'vue-router'

import helloES6 from '@/views/es6/index'
import ES6 from '@/views/es6/es6'
import poem from '@/views/jinrishici/index'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'helloES6',
    component: helloES6
  }, {
    path: '/ES6',
    name: 'ES6',
    component: ES6
  }, {
    path: '/poem',
    name: 'poem',
    component: poem
  }]
})

export default router