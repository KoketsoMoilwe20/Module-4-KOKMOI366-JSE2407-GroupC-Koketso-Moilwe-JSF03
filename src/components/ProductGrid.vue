<template>
    <div class="product-grid">
        <div class="grid">

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