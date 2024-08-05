import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ProductGrid from './components/ProductGrid.vue'
import ProductDetails from './components/ProductDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ProductGrid
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

createApp(App).use(router).mount('#app')
