<script setup lang="ts">
import Main from './components/Main.vue'


  // '<v-slot name="slotname"></v-slot> pozwala wstawić zawartość div',
  // '<keep-alive> - zapisuje zawartość komponentu po jego unmounted, gdy wracamy do tego samego komponentu to dane zawarte w nim również są przywracane',


</script>

<template>
  <div>
    <div>Vue all in one!</div>
    <Main>
      <RouterView />
    </Main>
  </div>
</template>