<script setup lang="ts">

import TheTransition from './features/03_transition/TheTransition.vue';

import TheForm from './features/01_form_&_vModel/TheForm.vue';
import TheKeepAlive from './features/02_keep_alive/TheKeepAlive.vue';
import TheNavigation from './ui/TheNavigation.vue';
import TheSlot from './features/04_slots_&_templates/TheSlot.vue';
import { ref } from 'vue';

const isBasicVisible = ref(false);

function toggleVisible(){
  isBasicVisible.value = !isBasicVisible.value
}



  // ref & reactive 
  // Teleport to.....

</script>

<template>
  <button @click="toggleVisible">Toggle Basic Visible</button>
  <Main>
    <div>
      <div v-if="isBasicVisible">
        <h2>Obsługa formularza</h2>
        <the-form />
        <h2>Keep Alive</h2>
        <the-keep-alive />
        <h2>Transition</h2>
        <the-transition />
        <h2>Slots & templates</h2>
        <the-slot>
          <!-- <template v-slot:title>Tytuł</template> -->
          <template v-slot:default>Default</template>
          <template v-slot:footer>Stopka</template>
        </the-slot>
      </div>
      


      <h2>VueRouter</h2>
      <the-navigation />
      <hr />
      <RouterView />
    </div>
  </Main>
</template>