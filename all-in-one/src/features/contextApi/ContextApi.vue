<script lang="ts" setup>
import { provide, inject, defineProps, defineEmits, ref, computed, watch } from 'vue';

// const props = defineProps<{
//   name?: string
// }>()

// const emits = defineEmits<{
//   ( event: 'name-event', payload: ('emit data')) : void
// }>()

// provide('key', 'value')
// const key = inject('key')

const counter = ref(0)

const counterMessage = computed(() => {
  return 'Your counter value is ' + counter.value
})

function increment(){
  ++counter.value;
}
function decrement(){
  --counter.value;
}

watch([counter], () => {
  console.log('Counter is change!')
})

</script>

<template>
  <div>
      <h1>OptionalAPI</h1>

    <!-- date() & methods -->
    <div>
      Counter
      <button @click="increment">+</button>
      {{ counter }}
      <button @click="decrement">-</button>
    </div>
    <!-- computed -->
    <div>
      {{ counterMessage }}
    </div>
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
