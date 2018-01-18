import Vue from 'vue'
import Router from 'vue-router'

import main from '@/pages/main'
import Abstract from '@/pages/Abstract'
import VI from '@/pages/VI'
import Color from '@/pages/Color'
import Example from '@/pages/example'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'main',
      component: main,
      children:[
        {
          path: '',
          name: 'Abstract',
          component: Abstract
        },
        {
          path: '/vi',
          name: 'VI',
          component: VI
        },
        {
          path: '/color',
          name: 'Color',
          component: Color
        },
      ]
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
  ]
})
