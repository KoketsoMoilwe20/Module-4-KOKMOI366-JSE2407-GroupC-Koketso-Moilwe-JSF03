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
        <Sort @sort-change="handleSortChange" :appliedFilters="appliedFilters.sortOption"
        :key="reset"/>
        <button @click="resetFilters" class="reset-button">Reset Filters</button>
    </div>
    
</template>

<script setup>
    import {ref, onMounted, watch} from 'vue';
    import Sort from './Sort.vue';

    const props = defineProps({
        appliedFilters: {
            type: Object,
            default: () => ({})
        }
    });

    const searchQuery = ref(props.appliedFilters.searchQuery || '');
    const categories = ref([]);
    const selectedCategory = ref(props.appliedFilters.category || '');
    const sortOption = ref(props.appliedFilters.sortOption || '');
    const reset = ref(0);

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

    const resetFilters = () => {
        searchQuery.value = '';
        selectedCategory.value = '';
        sortOption.value = '';
        reset.value += 1; //this forces the sort component to re-render
        emitFilterSortChange();
    };

    onMounted(fetchCategories);

    watch(props.appliedFilters, (newFilters) => {
        searchQuery.value = newFilters.searchQuery || '';
        selectedCategory.value = newFilters.category || '';
        sortOption.value = newFilters.sortOption || '';
    }, {immediate: true});
</script>

<style scoped>
    .filter-sort-container {
        display: flex;
        flex-direction: column;
        gap: 15px;
        background-color: #F3DBCE;
        padding: 15px;
    }

    .filter-component {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 15px;
    }

    .search-bar, .category-filter {
        flex-grow: 1;
        min-width: 200px;
    }

    .search-bar input, .category-filter select {
        width: 100%;
        padding: 8px;
        border: 1px solid #B5838D;
        border-radius: 4px;
        font-size: 14px;
        background-color: #FFCDB2;
    }

.search-bar input {
    max-width: 300px;
}

.category-filter select {
    max-width: 200px;
}

.reset-button {
    padding: 8px 12px;
        background-color: #FFB4A2;
        border: 1px solid #E5989B;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        color: #6d6875;
        display: block;
        margin: 10px auto 0;
}

.reset-button:hover {
  background-color: #E5989B;
}

@media (min-width: 768px) {
        .filter-sort-container {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        .filter-component {
            flex: 1;
            justify-content: flex-start;
        }

        .reset-button {
            margin: 0;
            flex-shrink: 0;
        }
    }
</style>