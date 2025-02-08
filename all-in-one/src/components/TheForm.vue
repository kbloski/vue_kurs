<script setup lang="ts">
import { ref } from 'vue';

const name = ref('Kamil')
const surname = ref('Blonski')

function onSubmit(event: Event){
  
}

</script>

<template>
  <pre>
    InputValues:
    name - {{ name }}
    surname - {{ surname }}
  </pre>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="name" />
    <input type="text" v-model="surname" />
    <button type="submit">Submit</button>
  </form>
</template> 

