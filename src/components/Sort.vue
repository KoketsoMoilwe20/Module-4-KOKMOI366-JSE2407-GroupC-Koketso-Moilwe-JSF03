<template>
    <div class="sort-component">
        <select v-model="sortOption" @change="emitSortChange">
            <option value="">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
        </select>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue';

    const props = defineProps({
        initialSort: {
            type: String,
            default: ''
        }
    });

    const sortOption = ref(props.initialSort);

    const emit = defineEmits(['sort-change']);

    const emitSortChange = () => {
        emit('sort-change', sortOption.value)
    };

    watch(sortOption, () => {
        emitSortChange();
    }, {immediate: true})
</script>

<style scoped>
    
</style>