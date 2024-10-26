<template>
    <base-card>
        <h2>Navigation</h2>
        <ul>
            <li v-if="!isLoggedIn">
                <base-button link to="/login">Login Page</base-button>
            </li>

            <li v-if="isLoggedIn">
                <base-button link to="/dashboard">Dashboard</base-button>
            </li>
            <li v-if="isLoggedIn"><base-button @click="logout">Logout</base-button></li>
        </ul>
    </base-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters("auth", ["isLoggedIn"]),
    },
    methods: {
        logout() {
            this.$store.dispatch("auth/logout");
            this.$router.push("/login");
        },
    },
};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
}

.router-link-active {
    border: 0px;
    background: rgb(180, 0, 171);
}
</style>
