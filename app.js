const app = Vue.createApp({
    data (){
        return {
            titleExamp: 'Przykładowy tytuł',
            objExmamp: {
                learn: 'Learn Vue!',
                master: 'Master Vue!'
            },
            vueLink: "#przykładowyLink"
        }
    },
    methods: {
        outputGoals(){
            const randomNuber = Math.random();
            if (randomNuber < 0.5) {
                return this.objExmamp.learn;
            } else {
                return this.objExmamp.master;
                return 'Master Vue!';
            }
        }
    }
});

app.mount('#app');

