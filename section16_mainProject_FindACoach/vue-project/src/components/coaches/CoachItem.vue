<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>{{ rate }} $/hour</h4>
    <div>
      <base-badge v-for="area in areas" 
        :key="area" 
        :title="area" 
        :type="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button link mode="outline" :to="coachContactLink">Contact</base-button>
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "surname", "rate", "areas"],
  computed: {
    fullName() {
      return `${this.name} ${this.surname}`;
    },
    coachDetailsLink() {
      return this.$route.path + `/${this.id}`;
    },
    coachContactLink() {
      return this.$route.path + `/${this.id}/contact`;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

span {
  margin: 0;
  padding: 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
