import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty' },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'main' },
    component: () => import('../views/Record.vue')
  },
  {
    path: '/allposts',
    name: 'All',
    meta: { layout: 'main' },
    component: () => import('../views/All.vue')
  },
  {
    path: '/myposts',
    name: 'My',
    meta: { layout: 'main' },
    component: () => import('../views/Myposts.vue')
  },
  {
    path: '/changepost',
    name: 'Changepost',
    meta: { layout: 'main' },
    component: () => import('../views/Changepost.vue')
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
