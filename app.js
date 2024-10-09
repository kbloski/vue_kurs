const app = Vue.createApp({
    data (){
        return {
            titleExamp: 'Przykładowy tytuł',
            vueLink: "#przykładowyLink"
        }
    },
    methods: {
        outputGoals(){
            const randomNuber = Math.random();
            if (randomNuber < 0.5) {
                return 'Learn Vue!'
            } else {
                return 'Master Vue!'
            }
        }
    }
});

app.mount('#app');

