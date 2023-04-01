
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'


const routes =  [
    {path: '/', name: 'Home', component: Home},
    {path: '/details/:id/:slug', name: 'contact.details', component: ()=>import('@/views/ContactDetails.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router