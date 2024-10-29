<template>
    <div>
        <h1>Hooks</h1>
        <pre>
// setup() === beforeCreate(), created()
// onBeforeMount, onMounted() === beforeMount(), mounted()
// onBeforeUpdate, onUpdated() === beforeUpdate(), updated()
// onBeforeUnmount, onUnmounted() === beforeUnmount(), unmounted()
        </pre>
        <button @click="toggleMounted">
            <span v-if="!cmpMounted">Mount</span>
            <span v-else>Unmount</span>
        </button>
        <button @click="counterIncrement">Counter Increment</button>
        <div v-if="cmpMounted">
            <the-hooks-component>
                {{ counter  }}
            </the-hooks-component>
        </div>
    </div>
</template>

<script>
import TheHooksComponent from "../components/TheHooksComponent.vue";
import { ref } from "vue";

export default {
    components: {
        TheHooksComponent,
    },
    setup(props, context) {
        const cmpMounted = ref(true);
        function toggleMounted() {
            cmpMounted.value = !cmpMounted.value;
        }

        const counter = ref( 0 )
        function counterIncrement(){
            counter.value++
        }


        return {
            cmpMounted,
            toggleMounted,
            counter,
            counterIncrement
        };
    },
};
</script>
