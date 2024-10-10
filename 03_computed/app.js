const vueApp = Vue.createApp({
    data(){
        return{
            title: 'Computed',
            counter: 0
        }
    },
    // computed jest podobne do useState w react, zapisuje dane i tylko w trakcie zmiany tych danych aktualizuje je na stronie, w html używamy ich jak zmiennych 
    computed: {
        fullname(){
            console.log('Computed name')
            return 'Computed name: ' + this.title
        }
    },
    methods: {
        getFullTitle(){
            console.log('Get full title - not computed, not efficienty')
            return 'Vue aplication name: ' + this.title
        }
    }
});

vueApp.mount('#app');