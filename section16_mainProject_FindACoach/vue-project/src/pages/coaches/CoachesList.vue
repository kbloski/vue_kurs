<template>
  <div>
    <section>FILTER</section>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as Coach</router-link>
      </div>
      <ul v-if="hasCoaches">
        <li v-for="coach in filteredCoaches" :key="coach.id">
          {{ coach.firstName }}
          {{ coach.lastName }}
        </li>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('coaches', ['hasCoaches']),
    filteredCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
  },
};
</script>
