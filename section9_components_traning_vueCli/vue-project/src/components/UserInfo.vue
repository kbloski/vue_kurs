<template>
  <section>
    <base-card>
      <template v-slot:header>
        Zawartość dla v-slot:header
      </template>
      <template v-slot:default></template>
    </base-card>
  </section>
</template>

<script>
import BaseBadge from './base/BaseBadg.vue';

export default {
  components: {
    'base-badge' : BaseBadge
  }
};
</script>
