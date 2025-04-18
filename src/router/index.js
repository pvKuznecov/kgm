import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/TestView/TestView.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/counters',
        name: 'counters',
        component: () => import('../views/CountersView/CountersView.vue')
    },
    {
        path: '/rules',
        name: 'rules',
        component: () => import('../views/RulesView/RulesView.vue')
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
