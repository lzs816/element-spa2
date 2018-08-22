import router from './routerMap.js'

const setTitle = (route) => {
  document.title = route.meta.title ? route.meta.title : 'element-spa2'
}

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(route => {
  setTitle(route)
})

export default router
