<script lang="ts" setup>
const compositionLinkObject = {
    name: 'context-api'
}
</script>

<template>
    <nav>
        <RouterLink to="/"><button>Optional Api</button></RouterLink>
        <RouterLink :to="compositionLinkObject"><button>Composition API</button></RouterLink>
    </nav>
</template>