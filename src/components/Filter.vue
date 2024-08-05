<template>
    <div class="filter-component">
        <div class="search-bar">
            <input 
                type="text"
                placeholder="Search products..."
            />
        </div>
        <div class="category-filter">
            <select>
                <option>All Categories</option>
                <option></option>
            </select>
        </div>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue';

    const searchQuery = ref('');
    const categories = ref([]);
    const selectedCategory = ref('');

    const emit = defineEmits(['filter-change']);

    const fetchCategories = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            categories.value = await response.json();
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const emitFilters = () => {
        emit('filter-change', {
            searchQuery: searchQuery.value,
            category: selectedCategory.value
        });
    };

    onMounted(fetchCategories)
</script>