<template>
  <li>
    <h2>{{ name }} {{ this.friendIsFavorite }}</h2>
    <button v-on:click="toggleDetails">Show Details</button>
    <button v-on:click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: [
    "name", 
    "phoneNumber", 
    "emailAddress",
    'isFavorite'
  ],
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
      // console.log(this.friendIsFavorite)
      if (this.friendIsFavorite) this.friendIsFavorite = 0
      else this.friendIsFavorite = 1
    }
  },
};
</script>

<style scoped></style>
