import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/end',
      name: 'end',
      component: () => import('../views/EndView.vue')
    },
    {
      path: '/Apart',
      name: 'Apart',
      component: () => import('../views/ApartView.vue')
    },
    {
      path: '/Bpart',
      name: 'Bpart',
      component: () => import('../views/BpartView.vue')
    },
    {
      path: '/Cpart',
      name: 'Cpart',
      component: () => import('../views/CpartView.vue')
    },
    {
      path: '/Dpart',
      name: 'Dpart',
      component: () => import('../views/DpartView.vue')
    },
    {
      path: '/Epart',
      name: 'Epart',
      component: () => import('../views/EpartView.vue')
    },
  ]
})

export default router
