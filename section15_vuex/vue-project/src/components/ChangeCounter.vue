<template>
  <div>
    <button @click="minus(2)">Minus 2</button>
    <button @click="minus(1)">Minus 1</button>
    <button @click="add(1)">Add 1</button>
    <button @click="add(2)">Add 2</button>
    <button @click="addAsync(10)">Add async 10</button>
    <button @click="increase(2)">Increase 2</button>
  </div>
</template>

<script>
export default {
  methods: {
    add(value) {
      this.$store.commit("increment", value);
    },
    minus(value) {
      this.$store.commit("decrement", value);
    },
    addAsync(value) {
      this.$store.dispatch({
        type: "increment",
        value: 10,
      });
    },
    increase(value) {
      this.$store.dispatch("increase", value);
    },
  },
};
</script>

<style scoped>
button {
  padding: 5px;
  margin: 5px;
}
</style>
