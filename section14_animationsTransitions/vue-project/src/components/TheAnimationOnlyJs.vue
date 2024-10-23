<template>
  <div class="container">
    <h2>Animation only in JS</h2>
    <div>
      <p>
        W Vue, zdarzenia v-on związane z animacjami w komponencie transition pozwalają na
        wywoływanie funkcji w odpowiednich momentach cyklu animacji:
      </p>

      <br>before-enter: wywoływane tuż przed rozpoczęciem animacji wejściowej. <br>enter: wywoływane, gdy animacja wejściowa się rozpoczyna. <br>after-enter: wywoływane pozakończeniu animacji wejściowej. 
      <br>enter-cancelled: wywoływane, jeśli animacja wejściowa zostanie przerwana. 
      <br>before-leave: wywoływane przed animacją wyjściową.
      <br> leave: wywoływane, gdy animacja wyjściowa się zaczyna. 
      <br>after-leave: po zakończeniu animacji wyjściowej. 
      <br>leave-cancelled: gdy animacja wyjściowa zostanie anulowana.

      <p>

      Używane są do kontrolowania i modyfikowania animacji w różnych etapach.
      </p>
    </div>
    <button v-on:click="toggleVisible">Toggle</button>
    <transition
      v-on:before-enter="beforeEnter"
      :css="false"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="isVisible">Animated paragraph only in JavaScript</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible;
    },
    beforeEnter(el, done) {
      console.log('Before Enter',el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          console.log("Enter");
          done();
        }
      }, 20);
    },
    afterEnter(el, done) {
      console.log("After Enter");
    },
    beforeLeave(el, done) {
      console.log('Before Leave')
      el.style.opacity = 1;
    },
    leave(el, done) {
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          console.log("leave");
          done();
        }
      }, 20);
    },
    afterLeave(el, done) {
      console.log("After leave Function");
    },
    enterCancelled(el, done) {
      console.log('Enter cancelled')
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el, done) {
      console.log('Leave Cancelled')
      clearInterval(this.leaveInterval);
    },
  },
};
</script>
