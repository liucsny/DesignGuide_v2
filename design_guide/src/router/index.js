import Vue from 'vue'
import Router from 'vue-router'
import Abstract from '@/pages/Abstract'
import VI from '@/pages/VI'
import Color from '@/pages/Color'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
