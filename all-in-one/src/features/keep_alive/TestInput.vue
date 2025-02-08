<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
    value : string
}>()

const isVisible = ref(true);
const variable = ref(props.value)

function toggleVisible(){
    isVisible.value = !isVisible.value;
}
</script>

<template>
    <input type="text" v-model="variable" />
</template>