import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect:'/home',
      children:[
        {
          path:'home',
          name:'home',
          component:()=> import('../views/home/index')
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:()=> import('../views/login/Login')
    }
  ]
})
