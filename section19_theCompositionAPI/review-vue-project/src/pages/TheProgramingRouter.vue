<template>
    <div>
        <h1>Programing route</h1>
        <button @click="gotoHomePage">userRouter().replace('/')</button>
        <h2>Vuex: {{  JSON.stringify(storeData) }}</h2>
    </div>
</template>

<script>
import { inject, ref } from 'vue';
import { useRouter, useRoute, useLink } from 'vue-router';
import { useStore } from 'vuex';

export default {
    setup(){
        const viewRouter = useRouter()
        const vuexStore = useStore()
        const storeData = vuexStore.state;

        function gotoHomePage(){
            viewRouter.replace('/');
        }

        return {
            gotoHomePage,
            storeData
        }
    }
}
</script>