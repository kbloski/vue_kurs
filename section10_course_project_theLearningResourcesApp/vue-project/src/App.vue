<template>
  <div>
    <the-header title="RememberMe"></the-header>
    <the-resources></the-resources>
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default {
  components: {
    TheHeader,
    TheResources
  },
  
}
</script>

<style>

* {
  box-sizing: border-box;
}

html {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body {
  margin: 0;
}
</style>