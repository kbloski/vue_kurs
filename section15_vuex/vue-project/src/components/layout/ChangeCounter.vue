<template>
  <div>
    <button @click="decrement(2)">Minus 2</button>
    <button @click="decrement(1)">Minus 1</button>
    <button @click="add(1)">Add 1</button>
    <button @click="add(2)">Add 2</button>
    <button @click="addAsync">Add async 1</button>
    <button @click="increase(2)">Increase 2</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    // mapActins('namespace', ['action', 'action', ... ])
    ...mapActions("numbers", ["increase", "increment", "decrement", 'add']),
    addAsync() {
      this.increment(1);
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
