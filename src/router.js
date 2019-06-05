import Router from 'vue-router'

export default new Router({
  mode: 'history',
  routes: [
    {  
      path: '/',
      name: 'home',
      component: 'home'
    }
  ]
})