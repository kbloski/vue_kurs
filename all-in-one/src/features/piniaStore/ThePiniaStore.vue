<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';
import { ref } from 'vue';

// Composition API
const store = useCounterStore();

function incrementStoreCount(){
    store.increment()
}

// Optional APi
// export default {
//     data() {
//         return {
//             store: useCounterStore()
//         }
//     },
//     methods: {
//         incrementStoreCount(){
//             this.store.increment()
//         }
//     }
// }
</script>

<template>
    <button @click="incrementStoreCount">Increment</button>
    {{ store.count }} / {{ store.doubleCount }} 
</template>