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
    .sort-component {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
    }

    .sort-component select {
        padding: 8px;
        border: 1px solid #B5838D;
        border-radius: 4px;
        font-size: 16px;
        background-color: #FFFFFF; /* Background color */
        color: #6D6875; /* Text color */
        width: 200px;
    }

    @media (max-width: 768px) {
        .sort-component {
            margin-top: 20px;
            justify-content: flex-start;
        }

        .sort-component select {
            width: 100%;
            max-width: 200px;
        }
    }
</style>