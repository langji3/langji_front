import { useLoadingStore } from '@/stores/loading';
import {createWebHistory,createRouter} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () => import('@/views/index')
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('@/views/home')
        }
    ]
})

export default router