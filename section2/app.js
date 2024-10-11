const appVue = Vue.createApp(
    {
        data(){
            return {
                name: 'Kamil',
                surname: 'Błoński',
                vhtmlCode: `<p style='color: green'>v-html function</p>`
            }
        },
        watch: {
            name(newValue, oldValue){ console.log(`Watcher - change name ${oldValue} on ${newValue}`)} 
        },
        computed: {
            fullname(){ return `${this.name} ${this.surname}`},
            randomId(){ return Math.round(Math.random() * 100)},
        },
        methods: {
            submitForm(event){ 
                event.preventDefault();
                alert(`Wysłano formularz, wprowadzone dane to: ${this.fullname}`)
            },
            setName(event){
                const value = event.target.value;
                this.name = value;
            },
        }
    }
)

appVue.mount('#appVue')