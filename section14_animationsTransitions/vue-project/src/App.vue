<template>
  <section>
    <the-navigation></the-navigation>
    <router-view></router-view>
    <the-mode-transition></the-mode-transition>

    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <button @click="hideDialog">Close it!</button>
    </base-modal>
    
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
    <div class="container">
      <animation-only-js></animation-only-js>
    </div>
    <div class="container">
      <user-list></user-list>
    </div>
      <!-- <router-view v-slot="slotProps">
          <transition name="routes-transition" mode="out-in">
              <component :is="slotProps.Component"></component>
          </transition>
      </router-view> -->
  </section>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
import TheModeTransition from './components/TheModeTransition.vue';

import AnimationOnlyJs from './components/AnimationOnlyJs.vue';
import UserList from './components/TheTransitionGroup.vue';

export default {
  components: {
    AnimationOnlyJs,
    UserList,
    TheNavigation,
    TheModeTransition
  },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      usersAreVisible: false,
    };
  },
  methods: {
    beforeEnterAnimation(el){
      console.log('Before enter animation function');
      console.log(el)
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
  display: block;
  margin: 5px;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}

.animate {
  animation: fade-rotate 1s ease-out forwards;
}

.routes-transition-enter-from {}
.routes-transition-enter-active {
  animation: fade-rotate 0.4s ease;
}
.routes-transition-enter-to {}

.routes-transition-leave-active {
  animation: fade-rotate 1s ease ;
}


.customName-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.customName-enter-active {
  transition: all 1s ease-out;
}

.customName-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.customName-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.customName-leave-active {
  transition: all 1s ease-in;
}
.customName-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-button-enter-from {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-enter-to {
  opacity: 1;
}

</style>
