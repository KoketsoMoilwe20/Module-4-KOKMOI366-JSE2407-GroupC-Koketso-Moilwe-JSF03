import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ProductGrid from './components/ProductGrid.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ProductGrid
    }
]

createApp(App).mount('#app')
