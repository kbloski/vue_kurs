<script lang="ts">

// interface MyComponentProps {
//   name: string;
//   age: number;
// }

export default {
  // props: {
  //   // Określanie typu poprzez interfejs
  //   name: {
  //     type: String,
  //     required: true
  //   },
  //   age: {
  //     type: Number,
  //     required: false,
  //     default: 18
  //   }
  // } as MyComponentProps, // Przypisanie interfejsu


  // emits: ['emit1','emit2'],
  // provide(){
  //   return {
  //       val: 'Provided value'
  //   }
  // },
  // inject: [ 'val'],
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
