<template>
  <li>
    <h2>{{ name }} {{ isFavorite }}</h2>
    <button v-on:click="toggleDetails">Show Details</button>
    <button v-on:click="toggleFavorite">Toggle Favorite</button>
    <button v-on:click="deleteContact">Delete Friend</button>
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
  // emits: ['toggle-favorite' ],
  emits: {
    'toggle-favorite' : function(id: string){
      if (id) {
        return true;
      } else {
        console.warn('Id is missing');
        return false;
      }
    },
    'delete-contact' : function(id: string){ return true},
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
    },
    deleteContact(){
      this.$emit("delete-contact", this.id);
    }
  },
};
</script>

<style scoped></style>
