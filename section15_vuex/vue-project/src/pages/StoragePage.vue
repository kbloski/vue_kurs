<template>
    <base-container>
        <div>
            <h2>Inner storeVueX - $store.state</h2>
            {{ JSON.stringify($store.state)}}
        </div>
        <h1>Storage Page with Vuex</h1>
        <section>
            <h2> this.$store</h2>
            <h3>Store counter {{  counter }}</h3>
            <the-counter></the-counter>
            <button @click="increment">Increment</button>
            <button @click="decrement">Decrement</button>
        </section>
        <section>
            <favorite-value></favorite-value>
            <change-counter></change-counter>
        </section>
    </base-container>
</template>

<script>
import TheCounter from '@/components/layout/TheCounter.vue';
import ChangeCounter from '@/components/ChangeCounter.vue';
import FavoriteValue from '@/components/FavoriteValue.vue';

export default {
    components: {
        TheCounter,
        ChangeCounter,
        FavoriteValue
    },
    computed: {
        counter(){
            return this.$store.getters.getCounter
        }
    },
    methods: {
        increment(){
            this.$store.commit('increment')
            // this.$store.mutations...
        },
        decrement(){
            // this.$store.actions...
            this.$store.dispatch('decrement')
        }
    }
}
</script>

<style scoped>

section {
    padding: 0 0;
    margin: 10px 0 0 0;
    border-top: 2px solid black
}

</style>