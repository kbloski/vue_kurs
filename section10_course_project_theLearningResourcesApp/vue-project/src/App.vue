<template>
  <ul>
    <learning-resource 
      v-for="res in storeResources" 
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResourceItem.vue';

export default {
  components: {
    LearningResource
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
  }
}
</script>