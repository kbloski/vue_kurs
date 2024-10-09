const app = Vue.createApp({
    data (){
        return {
            titleExamp: 'Przykładowy tytuł',
            arrExmamp: ['a1','b2','c3'],
            vueLink: "#przykładowyLink"
        }
    },
    methods: {
        outputGoals(){
            const randomNuber = Math.random();
            if (randomNuber < 0.5) {
                return 'Learn Vue!' + this.arrExmamp[0];
            } else {
                return 'Master Vue!' + this.arrExmamp[1]
            }
        }
    }
});

app.mount('#app');

