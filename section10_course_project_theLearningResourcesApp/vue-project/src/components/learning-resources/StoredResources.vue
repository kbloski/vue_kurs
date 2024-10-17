<template>
  <ul>
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
      v-on:delete-resource="removeResource(res.id)"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from "./LearningResourceItem.vue";

export default {
  props: ["resources"],
  inject: [ 'removeResource' ],
  components: {
    LearningResource,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
