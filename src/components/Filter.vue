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
</script>