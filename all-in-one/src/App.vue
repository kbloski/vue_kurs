<script setup lang="ts">

import TheForm from './features/01_form_&_vModel/TheForm.vue';
import TheKeepAlive from './features/02_keep_alive/TheKeepAlive.vue';
import TheNavigation from './ui/TheNavigation.vue';
import TheSlot from './features/04_slots_&_templates/TheSlot.vue';
import TheTransition from './features/03_transition/TheTransition.vue';
import { ref } from 'vue';
import TheFive from './features/05_emit_props_provide_inject/TheFive.vue';
import TheTeleport from './features/06_teleport/TheTeleport.vue';
import ThePiniaStore from './features/piniaStore/ThePiniaStore.vue';


const isBasicVisible = ref(true);

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
      <h2>Props & Emit & Provide & Inject</h2>
      <the-five />
      <h2>The Teleport</h2>
      <TheTeleport />
      <h2>The Pinia store</h2>
      <ThePiniaStore />

      <h2>VueRouter</h2>
      <the-navigation />
      <hr />

      <!-- Transtions with router-view -->
      <RouterView v-slot="slotProps">
        <Transition>
          <component :is="slotProps.Component" />
        </Transition>
      </RouterView>
    </div>
  </Main>
</template>

<style scoped>
.v-enter-from {
    opacity: 0;
}
.v-enter-active {
    transition: all .3s ease;
}
.v-enter-to {
    opacity: 1;
}

.v-leave-from {
  opacity: 1;
}

.v-leave-active {
  transition: all .3s ease;
}

.v-leave-to {
  opacity: 0;
}
</style>