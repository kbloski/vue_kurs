import { createStore } from 'vuex';
import requestsModule from './requests';
import coachModule from './coaches';

const store = createStore({
    modules: {
        coaches: coachModule,
        requests: requestsModule
    }
});

export default store;