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
    },
    beforeCreate() {
        console.log( 'beforeCreate()')
    },
    created(){
        console.log('created()')
    },
    beforeMount(){
        console.log('bveforeMount()')
    },
    mounted(){
        console.log('mounted()')
    },
    beforeUpdate(){
        console.log('beforeUpdate()');
    },
    updated(){
        console.log('updated()')
    },
    beforeUnmount(){
        console.log('beforeUnmount()')
    },
    unmounted(){
        console.log('unmounted()')
    }
});

app.mount('#app');

setTimeout( ()=>{
    app.unmount();
}, 3000)