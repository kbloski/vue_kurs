<script lang="ts" setup>

const link = {
    name: 'vue-children',
    params: {
        childId: '---===testowe-child-id-z-twojego-url===---'
    }
}

</script>

<template>
    <h1>The Router View</h1>
    <RouterLink :to="link">Get children with prop </RouterLink>


    <div>
        <RouterView name="header" />
        <RouterView />
    </div>
</template>