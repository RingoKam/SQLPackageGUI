import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/info',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/',
      name: 'main',
      component: 
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
