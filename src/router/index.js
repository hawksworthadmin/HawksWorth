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
    component: () => import(/* webpackChunkName: "about" */ '../views/HowWeWorkView')
  },
  {
    path: '/hawksworth/what',
    name: 'HowWeWorkView',
    component: () => import(/* webpackChunkName: "about" */ '../views/WhatWeDoView')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active",
  scrollBehavior() {
    return {
      x: 0, y: 0,
      behavior: 'smooth'
    }
  },

})

export default router
