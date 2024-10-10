const vueApp = Vue.createApp({
    data(){
        return {
            counter: 0,
            name: '',
            confirmedName: 'Default name'
        }
    },
    methods: {
        clearCounter(){
            this.counter = 0
        },
        resetInput(){
            this.confirmedName = '';
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