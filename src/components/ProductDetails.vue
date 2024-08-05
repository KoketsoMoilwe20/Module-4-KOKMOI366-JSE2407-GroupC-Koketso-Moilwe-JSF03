<template>
    <div v-if="loading" class="product-details">
        Loading...
    </div>
    <div v-else-if="product" class="product-details">
        <img :src="product.image" class="product-image">
        <h2>{{ product.title }}</h2>
        <p class="price">${{ product.price }}</p>
        <p class="description">{{ product.description }}</p>
        <p class="category">Category: {{ product.category }}</p>
    </div>
    <div v-else class="prodcuct-details">
        Product not found
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const product = ref(null) 
    const loading = ref(true)
    const route = useRoute()

    const fetchProduct = async () => {
        const id = route.params.id;
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            product.value = await response.json()
            loading.value = false
        } catch (error) {
            console.error('Error fetching product:', error)
            loading.value = false
        }
    }

    onMounted(fetchProduct)
</script>

<style scoped>
    .product-details {
        padding: 20px;
        max-width: 600px;
        margin: 0 auto;
    }

    .product-image {
        max-width: 100%;
        height: 400px;
        object-fit: contain;
    }

    .price {
        font-weight: bold;
        font-size: 1.2em;
    }

    .description {
        margin-top: 20px;
    }

    .category {
        font-style: italic;
        color: #666;
    }
</style>