<template>
    <div class="container">
        <div>
            <button @click="toggleTitleVisible">Title animation</button>
            <button @click="toggleParaVisible">Paragraph animation</button>
            <button @click="toggleExampVisible">Example animation</button>
            <transition>
                <!-- 
                Transition może mieć tylko jednego potomka któremu nada efekty
                -->

                <!-- 
                Można umieścić więcej niż jeden element w transition tylko i włącznie w przypadku, gdy mamy pewność, że tylko jeden z tych elementów końcowo pojawi się w drzewie dom, transition będzie miało tylko i wyłącznie jednego potomka  
                -->

                <!-- 
                 Musimy w tym przypadku używać v-if i v-else-if, tylko wtedy vue ma pewność, że tylko jeden z elementów zostanie wyświetlony 
                -->
                <h2 v-if="titleIsVisible">Transition</h2>
            </transition>
            <transition name="para">
                <p v-if="paraIsVisible">
                    W Vue.js transition służy do animowania zmian stanu elementów w interfejsie użytkownika, takich jak pojawianie się i znikanie. Dzięki komponentowi transition, możemy łatwo dodać animacje CSS lub wykorzystać animacje JavaScript, aby płynnie zmieniać wygląd elementów podczas ich wchodzenia, opuszczania czy modyfikacji.
                </p>
            </transition>
            <transition v-on:before-enter="funBeforeEnter">
                <p v-if="exampIsVisible">Check console.log</p>
                 <!-- 
                 W Vue, zdarzenia v-on związane z animacjami w komponencie <transition> pozwalają na wywoływanie funkcji w odpowiednich momentach cyklu animacji: 
                 -->

                <!-- 
                before-enter: wywoływane tuż przed rozpoczęciem animacji wejściowej.
                enter: wywoływane, gdy animacja wejściowa się rozpoczyna.
                after-enter: wywoływane po zakończeniu animacji wejściowej.
                enter-cancelled: wywoływane, jeśli animacja wejściowa zostanie przerwana.
                before-leave: wywoływane przed animacją wyjściową.
                leave: wywoływane, gdy animacja wyjściowa się zaczyna.
                after-leave: po zakończeniu animacji wyjściowej.
                leave-cancelled: gdy animacja wyjściowa zostanie anulowana.
                Używane są do kontrolowania i modyfikowania animacji w różnych etapach. 
                -->
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            titleIsVisible: true,
            paraIsVisible: true,
            exampIsVisible: false
        }
    },
    methods: {
        toggleTitleVisible(){
            this.titleIsVisible = !this.titleIsVisible
        },
        toggleParaVisible(){
            this.paraIsVisible = !this.paraIsVisible
        },
        toggleExampVisible(){
            this.exampIsVisible = !this.exampIsVisible
        },
        funBeforeEnter(){
            console.log('Function before enter local')
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