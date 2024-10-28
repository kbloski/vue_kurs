<template>
    <base-card>
        <h2>Dashboard</h2>
        {{ JSON.stringify(user) }}
    </base-card>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.getters["auth/authUser"];
        },
    },
};
</script>
