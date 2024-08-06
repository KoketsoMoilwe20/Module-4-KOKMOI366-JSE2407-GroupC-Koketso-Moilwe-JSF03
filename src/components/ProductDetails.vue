<template>
    <div v-if="loading" class="product-details">
        Loading...
    </div>
    <div v-else-if="product" class="product-details">
        <img :src="product.image" class="product-image">
        <h2>{{ product.title }}</h2>
        <p class="price">${{ product.price }}</p>
        <div class="ratings">
            <span v-for="star in 5" :key="star" class="star">
                <svg v-if="star <= product.rating.rate" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="star-filled" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.453L24 9.539l-6 5.848 1.417 8.273L12 18.897l-7.417 4.763L6 15.387 0 9.539l8.332-1.499z"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="star-empty" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.453L24 9.539l-6 5.848 1.417 8.273L12 18.897l-7.417 4.763L6 15.387 0 9.539l8.332-1.499z" fill-opacity="0.3"/></svg>
            </span>
            <span class="rating-number">({{ product.rating.count }})</span>
        </div>
        <p class="description">{{ product.description }}</p>
        <p class="category">Category: {{ product.category }}</p>
        <button @click="goBack">Back To Products</button>
    </div>
    <div v-else class="prodcuct-details">
        Product not found
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

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

    const router = useRouter();
    const goBack = () => {
        router.push({name: 'Home',
            query: route.query //preserving the current query parameters
        });
    };

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

    .ratings {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
}

.star {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.1rem;
}

.star-filled {
    color: #ffc107;
}

.star-empty {
    color: #e0e0e0;
}

.rating-number {
    font-size: 1rem;
    color: #6b7280;
    margin-left: 0.5rem;
}

.product-details .description {
    font-size: 1rem;
    margin: 1rem 0;
    color: #4b5563;
}
</style>