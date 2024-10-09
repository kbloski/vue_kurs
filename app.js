const app = Vue.createApp({
    data (){
        const goals = ['goal1', 'goal2','goal3']
        return {
            goals
        }
    }
});

app.mount('#app');

