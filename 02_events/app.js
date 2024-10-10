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
        confirmInputName( event ){
            const value =  event.target.value
            if (value.length >= 3) this.confirmedName = value
            
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