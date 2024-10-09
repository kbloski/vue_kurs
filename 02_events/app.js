const vueApp = Vue.createApp({
    data(){
        return {
            counter: 0,
            description: 'example description'
        }
    },
    methods: {
        clearCounter(){
            this.counter = 0
        },
        setDescription( text ){
            this.description =  text
        }
    }
}
);


vueApp.mount('#events')