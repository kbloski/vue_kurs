import { createStore } from 'vuex';
import requestsModule from './requests';
import coachModule from './coaches';

const store = createStore({
    modules: {
        coaches: coachModule,
        requests: requestsModule
    },
    state(){
        return {
            userId: 'c3'
        }
    },
    getters: {
        userId(state){
            return state.userId
        }
    }
});

export default store;