import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/home/index')
        },
        {
          path: 'loanApplication',
          name: 'loanApplication',
          component: () => import('../views/loanApplication/index')
        },
        {
          path: 'applicationManagement',
          name: 'applicationManagement',
          component: () => import('../views/applicationManagement/index')
        }

    ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/Login')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const isLogin = sessionStorage.AdminToken ? true : false;
  if(to.path == '/login') {
    next()
  }else {
    isLogin ? next() : next('/login');
  }
})
export default router;