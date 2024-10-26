<template>
  <div>
    <the-header></the-header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
}

</script>

<style>
* {
  box-sizing: border-box;
  margin: auto;
  padding: auto;
}

html {
  font-family: Verdana, Geneva, Tahoma, sans-serif; 
  font-weight: bold;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}


</style>