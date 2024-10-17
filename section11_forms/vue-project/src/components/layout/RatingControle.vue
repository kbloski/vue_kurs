<template>
  <ul>
    <li :class="{ active: activeOption === 'poor' }">
      <button @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'averange' }">
      <button @click="activate('averange')">Average</button>
    </li>
    <li :class="{ active: activeOption === 'great' }">
      <button  @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  computed: {
    activeOption(){}
  },
  methods: {
    activate(option) {
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style>
.active {
  border-color: green;
}

.active button {
  border-color: green;
}
</style>
