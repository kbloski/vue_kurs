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
                <base-button>Login</base-button>
            </form>
        </base-card>
    </section>
</template>

<script>
export default {
    data(){
        return {
            login: '',
            password: '',
            isValid: true
        }
    },
    methods: {
        validationData(){
            this.isValid = true;
            if ( !this.login.length || !this.password.length) this.isValid = false;
        },
        submitForm(){
            this.validationData();
    
        }
    }
}
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