<script lang="ts" setup>
import { ref } from 'vue';
import TestInput from './TestInput.vue';
const isVisible = ref(true);

function toggleVisible(){
    isVisible.value = !isVisible.value;
}
</script>

<template>
    <button @click="toggleVisible">Toggle Visible</button>
    <KeepAlive>
        <test-input v-if='isVisible' value="keep alive" />
    </KeepAlive>
    <test-input v-if='isVisible' value="no keep alive" />
</template>