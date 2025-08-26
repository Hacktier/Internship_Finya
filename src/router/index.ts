import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: () => import('../pages/Dashboard.vue')
        }, {
            path: '/calculator',
            name: 'Calculator',
            component: () => import('../components/Calculator.vue')
        }, {
            path: '/ProzentRechnen',
            name: 'ProzentRechnen',
            component: () => import('../components/ProzentRechnen.vue')
        }, {
            path: '/Store',
            name: 'Store',
            component: () => import('../components/Store.vue')
        }, {
            path: '/ZahlenRaten',
            name: 'ZahlenRaten',
            component: () => import('../components/ZahlenRaten.vue')
        }]
})
export default router
