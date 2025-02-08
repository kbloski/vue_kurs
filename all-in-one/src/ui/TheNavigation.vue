<script lang="ts" setup>
const compositionLinkObject = {
    // path: '/context-api',
    query: {  q: '3' },
    params: { id: 'moja-powtorka-gow' }, // jeśli występuje w ścieżce routingu
    name: 'context-api'
}
const vueRouterLinkObject = {
    path: '/the-vue-router',
    query: {  q: 'nauka' },
    params: { id: 'moja-powtorka-gow' }, // jeśli występuje w ścieżce routingu
    // name: 'context-api'
}
</script>

<template>
    <nav>
        <RouterLink to="/optional-api/moje-id"><button>Optional Api</button></RouterLink>
        <RouterLink :to="compositionLinkObject"><button>Composition API</button></RouterLink>
        <RouterLink :to="vueRouterLinkObject"><button>Vue Router</button></RouterLink>
    </nav>
</template>

<style lang="css">
.router-link-active > button{
    background-color: greenyellow;
}

/* router-link-active → dodawane do wszystkich pasujących linków (np. /about będzie aktywne także dla /about/team). */

/* router-link-exact-active → dodawane tylko wtedy, gdy ścieżka jest dokładnie taka sama. */
</style>