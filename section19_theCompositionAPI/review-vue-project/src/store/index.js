import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            data: 'State from vuex storage'
        }
    },
    mutations: {},
    actions: {},
    getters: {}
});

export default store;
