<template>
    <header>
        <h1><router-link to="/">Find a Coach</router-link></h1>
        <the-navigation></the-navigation>
    </header>
</template>

<script>
import TheNavigation from '../nav/TheNavigation.vue';

export default {
    components: {
        TheNavigation
    }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 a {
  color: white;
  margin: 0;
} 

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

</style>