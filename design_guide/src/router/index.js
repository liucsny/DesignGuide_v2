import Vue from 'vue'
import Router from 'vue-router'
import Abstract from '@/pages/Abstract'
import VI from '@/pages/VI'


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
    }
  ]
})
