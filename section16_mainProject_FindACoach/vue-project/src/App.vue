<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
}

</script>

<style>
* {
  box-sizing: border-box;
  margin: auto;
  padding: auto;
}

html {
  font-family: Verdana, Geneva, Tahoma, sans-serif; 
  font-weight: bold;
}

</style>