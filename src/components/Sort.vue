<template>
    <div class="sort-component">
        <select v-model="sortOption" @change="emitSort">
            <option value="">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
        </select>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const sortOption = ref('');
    const emit = defineEmits(['sort-change']);

    const emitSort = () => {
        emit('sort-change', sortOption.value)
    };
</script>

<style scoped>
    
</style>