<template>
    <base-container>
        <div>
            <h2>Inner storeVueX - $store.state</h2>
            {{ JSON.stringify($store.state)}}
        </div>
        <h1>Storage Page with Vuex</h1>
        <h3>Counter {{  counter }}</h3>
        <favorite-value></favorite-value>
        <the-counter></the-counter>
        <change-counter></change-counter>
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