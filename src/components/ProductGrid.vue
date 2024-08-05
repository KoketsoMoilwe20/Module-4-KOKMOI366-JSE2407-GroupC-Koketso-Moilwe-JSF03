<template>
    <div class="product-grid">
        <div class="grid">
            <div v-for="product in products" :key="product.id" class="product-card">
                <img :src="product.image" class="product-image">
                <h3>{{ product.title }}</h3>
                <p>{{ product.price }} USD</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue';
    import { useRouter } from 'vue-router';

    const products = ref([])

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            products.value = await response.json()
        } catch (error) {
            console.error('Error fetching products:', error)
        }
    }

    onMounted(fetchProducts)



</script>