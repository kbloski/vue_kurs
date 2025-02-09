<template>
    <the-component name="Kamil" @emit-active="emitFunction"/>
</template>

<script lang="ts" setup>

import TheComponent from './TheComponent.vue';
import { provide } from 'vue';
provide('provideVal', "This value is from provide function.")

function emitFunction( data : object){
    alert("Emit function: " + JSON.stringify( data))
}


// composition api
// import TheComponent from './TheComponent.vue';

// export default {
//     components: {
//         TheComponent
//     },
//     provide() {
//         return {
//             provideVal: 'This value is from provide function'
//         };
//     },
//     methods: {
//         // Możemy bardziej precyzyjnie określić typ danych, które funkcja przyjmuje
//         emitFunction(data: Record<string, any>) {
//             alert("Emit function: " + JSON.stringify(data));
//         }
//     }
// }
</script>
