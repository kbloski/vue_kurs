<template>
  <div>
    <section>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline">Refresh</base-button>
          <base-button v-if="!isCoach" link to="/register">Register as Coach</base-button>
        </div>
        <ul v-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :name="coach.firstName"
            :surname="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          >
            {{ coach.firstName }}
            {{ coach.lastName }}
          </coach-item>
        </ul>
        <h3 v-else>No coaches found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CoachItem from "@/components/coaches/CoachItem.vue";
import CoachFilter from "@/components/coaches/CoachFilter.vue";

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    ...mapGetters("coaches", ["hasCoaches"]),
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) return true;
        if (this.activeFilters.backend && coach.areas.includes("backend")) return true;
        if (this.activeFilters.career && coach.areas.includes("career")) return true;
        return false;
      });
    },
    isCoach(){
        return this.$store.getters['coaches/isCoach'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
      console.log(this.activeFilters);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
