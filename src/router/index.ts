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
      path: '/filter',
      name: 'filter',
      component: () => import('../views/FilterView.vue')
    },
    {
      path: '/end',
      name: 'end',
      component: () => import('../views/EndView.vue')
    }
  ]
})

export default router
