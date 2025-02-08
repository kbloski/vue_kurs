<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute()

const { childId } = route.params

</script>

<template>
    Router Child {{ childId }}
</template>