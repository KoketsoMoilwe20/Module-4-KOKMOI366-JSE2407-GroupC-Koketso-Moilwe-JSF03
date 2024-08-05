<template>

    <div class="filter-sort-container">
        <div class="filter-component">
        <div class="search-bar">
            <input 
                type="text"
                v-model="searchQuery"
                @input="emitFilters"
                placeholder="Search products..."
            />
        </div>
        <div class="category-filter">
            <select v-model="selectedCategory" @change="emitFilters">
                <option value="">All Categories</option>
                <option v-for="category in categories" :key="category" :value="category">
                    {{ category }}
                </option>
            </select>
        </div>
        </div>
        <Sort @sort-change="handleSortChange"/>
    </div>
    
</template>

<script setup>
    import {ref, onMounted} from 'vue';
    import Sort from './Sort.vue';

    const searchQuery = ref('');
    const categories = ref([]);
    const selectedCategory = ref('');
    const sortOption = ref('');

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
        emitFilterSortChange();
    };

    const handleSortChange = (newSortOption) => {
        sortOption.value = newSortOption;
        emitFilterSortChange();
    };

    const emitFilterSortChange = () => {
        emit('filter-sort-change', {
            searchQuery: searchQuery.value,
            category: selectedCategory.value,
            sortOption: sortOption.value
        });
    };

    onMounted(fetchCategories)
</script>