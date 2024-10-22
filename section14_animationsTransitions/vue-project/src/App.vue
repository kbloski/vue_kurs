<template>
  <section>
    <the-navigation></the-navigation>
    <router-view></router-view>
    <div class="container">
      <h2>Route animation</h2>
      <router-view v-slot="slotProps">
        <transition name="routes-transition">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
    <the-mode-transition></the-mode-transition>

    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <button @click="hideDialog">Close it!</button>
    </base-modal>

    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
    <animation-only-js></animation-only-js>
    <user-list></user-list>
  </section>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";
import TheModeTransition from "./components/TheModeTransition.vue";

import AnimationOnlyJs from "./components/TheAnimationOnlyJs.vue";
import UserList from "./components/TheTransitionGroup.vue";

export default {
  components: {
    AnimationOnlyJs,
    UserList,
    TheNavigation,
    TheModeTransition,
  },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      usersAreVisible: false,
    };
  },
  methods: {
    beforeEnterAnimation(el) {
      console.log("Before enter animation function");
      console.log(el);
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

/* 
.routes-transition-enter-from {}
.routes-transition-enter-to {} 
*/
.routes-transition-enter-active {
  animation: blur-animation 0.4s ease;
}
.routes-transition-leave-active {
  animation: blur-animation 1s ease reverse;
}

@keyframes blur-animation {
  from {
    filter: blur(10px)
  } 
  to {
    filter: blur(0px)
  }
}
</style>
