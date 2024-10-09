const app = Vue.createApp({
    data (){
        return {
            titleExamp: 'Przykładowy tytuł',
            objExmamp: {
                learn: 'Learn Vue!',
                master: 'Master Vue!'
            },
            htmlElemtExmp: '<h2>HTML H2</h2>',
            vueLink: "#przykładowyLink"
        }
    },
    methods: {
        outputGoals(){
            const randomNuber = Math.random();
            if (randomNuber < 0.5) {
                return this.objExmamp.learn;
                // return 'Learn Vue!';
            } else {
                return this.objExmamp.master;
                // return 'Master Vue!';
            }
        }
    }
});

app.mount('#app');

