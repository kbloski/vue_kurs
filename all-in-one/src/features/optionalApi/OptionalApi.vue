<script lang="ts">

export default {
  // emits: [],
  // props: [],
  components: {
    // TheForm
  },
  data(){
    return {
      counter: 0
    }
  },
  computed: {
    counterMessage(){
      return `Your counter value is ${this.counter}`
    }
  },
  methods: {
    increment(){
      ++this.counter;
    },
    decrement(){
      --this.counter;
    }
  },
  watch: {
    counter( newVal , oldVal){
      console.log( newVal, oldVal)
    }
  },
  // provide: {

  // },
  // inject(){

  // },



  // DODATKOWE HOOKI
  // beforeCreate() {},
  // created() {},
  // beforeUpdate() {},
  // updated() {},
  // beforeDestroy() { },
  // destroyed() { },
}
</script>

<template>
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


</template>
