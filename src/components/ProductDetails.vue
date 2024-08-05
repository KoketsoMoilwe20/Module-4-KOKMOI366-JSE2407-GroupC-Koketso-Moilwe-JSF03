<template>
    <div class="product-details">
        <img :src="product.image" class="product-image">
        <h2>{{ product.title }}</h2>
        <p class="price">${{ product.price }}</p>
        <p class="description">{{ product.description }}</p>
        <p class="category">Category: {{ product.category }}</p>
    </div>
</template>

<script>
    
</script>