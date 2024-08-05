<template>
    <div class="product-grid">
        <div class="grid">
            <div v-for="product in products" :key="product.id" class="product-card" @click="viewProduct(product.id)">
                <img :src="product.image" class="product-image">
                <h3>{{ product.title }}</h3>
                <h4>{{ product.category }}</h4>
                <p>${{ product.price }}</p>
                <button>Add To Cart</button>
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

    const router = useRouter();
    const viewProduct = (id) => {
        router.push({name: 'ProductDetails', params: {id}})
    }

    onMounted(fetchProducts)

</script>

<style scoped>

.product-grid {
    padding: 1rem;
    display: flex;
    justify-content: center;
    }

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px; 
}

.product-card {
  background-color: white;
  border: 1px solid #e5e7eb; 
  border-radius: 1rem; 
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); 
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  padding: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15); 
}

.product-image {
  width: 65%;
  height: 100%;
  object-fit: contain;
  border-bottom: 1px solid #e5e7eb; 
}

.product-card h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
  
}

.product-card h4 {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #6b7280; 
}

.product-card p {
  margin: 0.5rem 0;
  font-size: 1.125rem;
  font-weight: bold;
}

.product-card button {
  background-color: #4f46e5; 
  color: white;
  border: none;
  border-radius: 0.375rem; 
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: auto;
}

.product-card button:hover {
  background-color: #4338ca; 
}

</style>