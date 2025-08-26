import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../pages/Dashboard.vue')
    }, {
      path: '/explanation',
      name: 'Explanation',
      component: () => import('../pages/Explanation.vue')
    }]
})
export default router
