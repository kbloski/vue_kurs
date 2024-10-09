const vueApp = Vue.createApp({
    data(){
        return {
            counter: 0,
            name: 'Default name'
        }
    },
    methods: {
        clearCounter(){
            this.counter = 0
        },
        setName( event ){
            this.name = event.target.value
        },
        submitForm(event){
            event.preventDefault();
            alert("Was submit");
            console.log('Submitted')
        }
    }
}
);


vueApp.mount('#events')