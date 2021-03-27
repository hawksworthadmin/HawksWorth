import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hawksworth/how',
    name: 'HowWeWorkView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HowWeWorkView')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0, y: 0,
      behavior: 'smooth'
    }
  },

})

export default router
