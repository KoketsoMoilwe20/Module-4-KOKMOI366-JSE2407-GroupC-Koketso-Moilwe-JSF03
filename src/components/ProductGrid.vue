<template>
    <Filter @filter-sort-change="handleFilterSortChange" :appliedFilters="appliedFilters"/>
    <div class="product-grid">
      <div v-if="loading">Loading...</div>
        <div v-else class="grid">
            <div v-for="product in sortedAndFilteredProducts" :key="product.id" class="product-card" @click="viewProduct(product.id)">
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
    import {ref, onMounted, computed} from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import Filter from './Filter.vue';

    const products = ref([]);
    const loading = ref(true)
    const searchQuery = ref('');
    const selectedCategory = ref('');
    const sortOption = ref('');
    const appliedFilters = ref({});

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            products.value = await response.json()
            loading.value = false
        } catch (error) {
            console.error('Error fetching products:', error)
            loading.value = false
        }
    }

    const router = useRouter();
    const route = useRoute();

    const viewProduct = (id) => {
        router.push({name: 'ProductDetails',
         params: {id},
         query: {
          searchQuery: searchQuery.value,
          category: selectedCategory.value,
          sortOption: sortOption.value
         }
        });
    };

    const handleFilterSortChange = (filters) => {
      searchQuery.value = filters.searchQuery;
      selectedCategory.value = filters.category;
      sortOption.value = filters.sortOption;

      //Updating URL with the new filters and sort option
      router.replace({
        query: {
          searchQuery: searchQuery.value,
          category: selectedCategory.value,
          sortOption: sortOption.value
        }
      });
    };

    const filteredProducts = computed(() => {
      return products.value.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesCategory = selectedCategory.value === '' || product.category === selectedCategory.value;

        return matchesSearch && matchesCategory;
      });
    });

    const sortedAndFilteredProducts = computed(() => {
      let result = [...filteredProducts.value];
      if (sortOption.value === 'lowToHigh') {
        result.sort((a, b)  => a.price - b.price);
      } else if (sortOption.value === 'highToLow') {
        result.sort((a, b)  => b.price - a.price);
      }
      return result;
    });

    onMounted(() => {
      fetchProducts();

      //Restoring filters from URL query parameters
      const { searchQuery: q, category, sortOption: sort } = route.query;
      searchQuery.value = q || '';
      selectedCategory.value = category || '';
      sortOption.value = sort || '';

      appliedFilters.value = {
          searchQuery: q || '',
          category: category || '',
          sortOption: sort || ''
      };
    });

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