<template>
    <section>
        <base-card>
            <h2>Login</h2>
            <form @submit.prevent="submitForm">
                <div class="form-control">
                    <label id="login">Login</label>
                    <input type="text" id="login" v-model.trim="login" />
                </div>
                <div class="form-control">
                    <label id="password">Password</label>
                    <input type="password" id="password" v-model.trim="password" />
                </div>
                <p v-if="!isValid">Please provide email and password</p>
                <base-button v-if="!isLoading">Login</base-button>
                <p v-if="isLoading">Loading...</p>
            </form>
        </base-card>
    </section>
</template>

<script>
export default {
    data() {
        return {
            login: "admin",
            password: "admin",
            isValid: true,
            isLoading: false,
        };
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters["auth/isLoggedIn"];
        },
    },
    methods: {
        validationData() {
            this.isValid = true;
            if (!this.login.length || !this.password.length) {
                this.isValid = false;
            }
        },
        async submitForm() {
            this.validationData();
            if (!this.isValid) return;

            this.isLoading = true;

            const loginData = {
                login: this.login,
                password: this.password,
            };

            try {
                await this.$store.dispatch("auth/login", loginData);
            } catch (err) {
                null;
            } finally {
                this.isLoading = false;
            }

            if (this.isLoggedIn) this.$router.push("/dashboard");
        },
    },
};
</script>

<style scoped>
label {
    width: 100%;
}

input {
    width: 100%;
}
 
p {
    color: red;
}
</style>
