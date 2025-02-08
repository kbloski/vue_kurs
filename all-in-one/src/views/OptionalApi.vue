<script lang="ts">
import TheForm from '../features/form_&_vModel/TheForm.vue';

export default {
  // emits: [],
  // props: [],
  components: {
    TheForm
  },
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
  methods: {
    
  },
  watch: {

  },
  provide: {

  },
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
  <the-form />
  <div>computed - {{ fullname }}</div>
</template>
