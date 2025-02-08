<script setup lang="ts">
import Main from './features/Main.vue'
import TheTransition from './features/TheTransition.vue';
import TheNavigation from './ui/TheNavigation.vue';
import TheForm from './features/form_&_vModel/TheForm.vue';
import TheKeepAlive from './features/keep_alive/TheKeepAlive.vue';


  // '<v-slot name="slotname"></v-slot> pozwala wstawić zawartość div',
  // '<keep-alive> - zapisuje zawartość komponentu po jego unmounted, gdy wracamy do tego samego komponentu to dane zawarte w nim również są przywracane',

  // ref 

</script>

<template>
  <Main>
    <div>
      <h2>Obsługa formularza</h2>
      <the-form />
      <h2>Keep Alive</h2>
      <the-keep-alive />
      <h2>Transition</h2>
      <the-transition />
      <h2>Navigation</h2>
      <the-navigation />
      <h2>VueRouter</h2>
        <RouterView />
    </div>
  </Main>
</template>