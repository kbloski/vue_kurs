<template>
    <div class="container">
        <div>
            <button @click="toggleTitleVisible">Title animation</button>
            <button @click="toggleParaVisible">Paragraph animation</button>
            <transition>
                <h2 v-if="titleIsVisible">Transition</h2>
            </transition>
            <transition name="para">
                <p v-if="paraIsVisible">
                    W Vue.js transition służy do animowania zmian stanu elementów w interfejsie użytkownika, takich jak pojawianie się i znikanie. Dzięki komponentowi transition, możemy łatwo dodać animacje CSS lub wykorzystać animacje JavaScript, aby płynnie zmieniać wygląd elementów podczas ich wchodzenia, opuszczania czy modyfikacji.
                </p>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            titleIsVisible: true,
            paraIsVisible: true
        }
    },
    methods: {
        toggleTitleVisible(){
            this.titleIsVisible = !this.titleIsVisible
        },
        toggleParaVisible(){
            this.paraIsVisible = !this.paraIsVisible
        }
    }
}
</script>

<style scoped>
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
}

.para-enter-active {
    animation: slide-fade 0.3s ease;
}
.para-leave-active {
    animation: slide-fade 0.3s ease reverse;
}

@keyframes slide-fade {
    from {
        opacity: 0;
    }
    to {
        opacity: 1
    }
}
</style>