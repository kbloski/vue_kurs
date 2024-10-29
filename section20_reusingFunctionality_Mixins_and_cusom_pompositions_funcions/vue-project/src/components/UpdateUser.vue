<template>
    <div>
        <user-alert v-if="alertIsVisible" title="Update a User?" @close="hideAlert">
            <p>Do you want to continue with updateing a user?</p>
        </user-alert>
        <section>
            <h2>Update a User</h2>
            <button @click="showAlert">Update User</button>
        </section>
    </div>
</template>

<script>
import UserAlert from "./UserAlert.vue";
import useAlert from "../hooks/alert.js";
import { ref } from "vue";

export default {
    components: {
        UserAlert,
    },
    setup() {
        const [alertIsVisible, showAlert, hideAlert] = useAlert();

        return {
            alertIsVisible,
            showAlert,
            hideAlert
        };
    },
};
</script>
