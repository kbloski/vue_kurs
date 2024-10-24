<template>
    <base-container>
        <h1>Auth</h1>
        <h2>Logged: </h2>
        <button v-if="!isLogged" @click="login(true)">Login</button>
        <button v-if="isLogged" @click="login(false)">Logout</button>
    </base-container>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';
export default {
    computed: {
        ...mapGetters(['isLogged'])
    },
    methods: {
        ...mapActions(['login'])
    }
}
</script>