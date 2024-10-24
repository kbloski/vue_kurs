<template>
    <base-container>
        <h1>Auth Async 0.4s</h1>
        <h2>Logged: {{ isLogged }}</h2>
        <button v-if="!isLogged" @click="setAuth(true)">Login</button>
        <button v-if="isLogged" @click="setAuth(false)">Logout</button>
    </base-container>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';
export default {
    computed: {
        ...mapGetters(['isLogged'])
    },
    methods: {
        ...mapActions(['setAuth'])
    }
}
</script>