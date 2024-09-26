import {createWebHistory,createRouter} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/index')
        }
    ]
})
export default router