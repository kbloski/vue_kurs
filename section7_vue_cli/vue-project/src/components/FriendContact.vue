<template>
  <li>
    <h2>{{ name }} {{ isFavorite }}</h2>
    <button v-on:click="toggleDetails">Show Details</button>
    <button v-on:click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script lang="ts">

export default {
  // props: [
  //   "name", 
  //   "phoneNumber", 
  //   "emailAddress",
  //   'isFavorite'
  // ],
  props: {
    id: {
      type: String,
      required: true
    } ,
    name: {
      type: String,
      required: true
    },
    phoneNumber: String,
    emailAddress: String,
    isFavorite: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
      this.$emit('toggle-favorite', this.id );
    }
  },
};
</script>

<style scoped></style>
