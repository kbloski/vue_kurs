<template>
    <base-container>
        <div>
            <h2>Inner storeVueX - $store.state</h2>
            {{ JSON.stringify($store.state)}}
        </div>
        <h1>Storage Page with Vuex</h1>
        <h3>Counter {{  counter }}</h3>
        <the-counter></the-counter>
        <button @click="addOne">Add 1</button>
    </base-container>
</template>

<script>
import TheCounter from '@/components/layout/TheCounter.vue';

export default {
    components: {
        TheCounter
    },
    computed: {
        counter(){
            return this.$store.state.counter
        }
    },
    methods: {
        addOne(){
            this.$store.state.counter++;
        }
    }
}
</script>