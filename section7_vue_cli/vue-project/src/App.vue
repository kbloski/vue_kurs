<template>
    <section>
        <h2>My Friends</h2>
        <ul v-for="friend in friends" v-bind:key="friend.id">
            <li>{{ friend.id }}</li>
        </ul>
    </section>
</template>

<script lang="ts">
    export default {
    data() {
        return {
        friends: [
            {
            id: "manuel",
            name: "Manuel Lorenz ",
            phone: "01231232131",
            email: "manuel@local.host",
            },
            {
            id: "julie",
            name: "Julie Julie ",
            phone: "01231232131",
            email: "Julie@local.host",
            },
        ],
        };
    },
    };
</script>
