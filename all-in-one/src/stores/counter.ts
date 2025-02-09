import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)

  // Getter
  const doubleCount = computed(() => count.value * 2)

  // Action
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})


// Optional Api
// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     count: 0,
//   }),
//   getters: {
//     doubleCount(state): number {
//       return state.count * 2
//     },
//   },
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
// })

