<template>
  <section>
    <div class="container">
      <div class="block" :class="{ animate: animatedBlock }"></div>
      <button @click="animateBlock">Animate</button>
    </div>
    <div class="container">
      <!-- <transition    add custom name class for transition status
      enter-to-class=""
      enter-active-class=""
      enter-from-class=""
      >
        Transition może przyjmować tylko jeden potomny element!
      </transition> -->
      <transition>
        <p v-if="paraIsVisible">This is only sometimes visible...</p>
      </transition>
      <transition name="customName" v-on:before-enter="beforeEnterAnimation">
        <!-- W Vue, zdarzenia v-on związane z animacjami w komponencie <transition> pozwalają na wywoływanie funkcji w odpowiednich momentach cyklu animacji:

before-enter: wywoływane tuż przed rozpoczęciem animacji wejściowej.
enter: wywoływane, gdy animacja wejściowa się rozpoczyna.
after-enter: wywoływane po zakończeniu animacji wejściowej.
enter-cancelled: wywoływane, jeśli animacja wejściowa zostanie przerwana.
before-leave: wywoływane przed animacją wyjściową.
leave: wywoływane, gdy animacja wyjściowa się zaczyna.
after-leave: po zakończeniu animacji wyjściowej.
leave-cancelled: gdy animacja wyjściowa zostanie anulowana.
Używane są do kontrolowania i modyfikowania animacji w różnych etapach. -->
        <p v-if="paraIsVisible">This is only sometimes visible...</p>
      </transition>
      <button @click="toggleParagraph">Toggle Paraph</button>
    </div>
    <div class="container">
      <transition name="fade-button" mode="out-in">
        <!-- W Vue, parametr mode w komponencie <transition> kontroluje kolejność animacji przy zmianach elementów:
        in-out: najpierw animuje się nowy element, potem stary.
        out-in: najpierw animuje się stary element, potem nowy. -->

        <!-- Można umieścić więcej niż jeden element w transition tylko i włącznie w przypadku, gdy mamy pewność, że tylko jeden z tych elementów końcowo pojawi się w drzewie dom, transition będzie miało tylko i wyłącznie jednego potomka -->
        <!-- Musimy w tym przypadku używać v-if i v-else-if, tylko wtedy vue ma pewność, że tylko jeden z elementów zostanie wyświetlony -->
        <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
        <button @click="hideUsers" v-else-if="usersAreVisible">Hide Users</button>
      </transition>
    </div>
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
    <h2>Sides</h2>
      <router-view v-slot="slotProps">
          <transition name="routes-transition" mode="out-in">
              <component :is="slotProps.Component"></component>
          </transition>
      </router-view>
  </section>
</template>

<script>
import AnimationOnlyJs from './components/AnimationOnlyJs.vue';
import UserList from './components/UserList.vue';

export default {
  components: {
    AnimationOnlyJs,
    UserList
  },
  data() {
    return {
      paraIsVisible: false,
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
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
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

/* 
Default animation for transitions
.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-active {
  transition: all 0.3s ease-in;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */

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

@keyframes fade-rotate {
  0% {
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
