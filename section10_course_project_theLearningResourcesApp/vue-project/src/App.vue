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
  provide () {
    return {
      resources: this.storeResources
    }
  },
  data(){
    return {
      storeResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The oficial Vue.js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org'
        },
      ]
    }
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