<script lang="ts">
import TheForm from '../components/TheForm.vue';

export default {
  // emits: [],
  // props: [],
  data(){
    return {
      name: 'Kamil',
      surname: 'Błoński',
      counter: 0
    }
  },
  computed: {
    fullname(){
      return this.name + ' ' + this.surname;
    }
  },
  // methods: {
    
  // },
  // watch: {

  // },
  // provide(){

  // },
  // inject(){

  // },
  // beforeCreate() {},
  // created() {},
  // beforeUpdate() {},
  // updated() {},
  // beforeDestroy() { },
  // destroyed() { },
}
</script>

<template>
  <TheForm />
  <div>computed - {{ fullname }}</div>
</template>
