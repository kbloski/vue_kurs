<template>
    <div>
        <base-card>
            <h2>Dashboard</h2>
            {{ JSON.stringify(user) }}
        </base-card>
        <base-card>
            <h2>Async component base-dialog</h2>
            <base-button @click="activateDialog">Show test dialog</base-button>
            <base-dialog :show="showDialog" @close="closeDialog"
                >Testowy base dialog</base-dialog
            >
        </base-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showDialog: false,
        };
    },
    computed: {
        user() {
            return this.$store.getters["auth/authUser"];
        },
    },
    methods: {
        activateDialog() {
            console.log(this.showDialog);
            this.showDialog = true;
        },
        closeDialog() {
            this.showDialog = false;
        },
    },
};
</script>
