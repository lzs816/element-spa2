import Vue from 'vue'
import Router from 'vue-router'

const Frame = () => import('@/components/frames/frame')
const Login = () => import('@/views/common/login')
const ErrorPage = () => import('@/views/common/404')

const Index = () => import('@/views/index')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'is-active',
  routes: [{
    path: '/',
    name: 'frame',
    component: Frame,
    children: [{
      path: '/index',
      name: 'index',
      component: Index,
      meta: {
        auth: true,
        title: '主页'
      }
    }],
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    name: 'error',
    component: ErrorPage
  }
  ]
})

export default router
