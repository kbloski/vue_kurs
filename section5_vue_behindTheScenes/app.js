const app = Vue.createApp({
    data(){
        return {
            name: "Test application",
            userTextInput: '',
            message: ''
        };
    },
    methods: {
        setText(){
            this.message = this.$refs.userText.value;
        }
    }
});

app.mount('#app');