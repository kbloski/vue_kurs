<script lang="ts" setup>
import {  inject, defineProps, defineEmits } from 'vue';

const { name } = defineProps<{
    name?: string
}>()
const emits = defineEmits<{
    (event: 'emit-active', payload: object) : void
}>()

const provideVal = inject('provideVal')

function onButtonClick(){
    emits('emit-active', { message: "Emit message from object"})
}


// Optional API
// export default {
//     props: ['name'],
//     emits: ['emit-active'],
//     inject: ['provideVal'],
//     methods: {
//         onButtonClick(){
//             this.$emit('emit-active', {message: 'Emit message from object'})
//         }
//     }
// }
</script>



<template>
    <div>Props: {{  JSON.stringify(name) }}</div>
    <div>Provide: {{ provideVal }}</div>
    <button @click="onButtonClick">Emit</button>
</template>