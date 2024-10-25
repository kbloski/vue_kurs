import coaches from '@/api/coaches.js';
import coachMutations from './mutations.js';
import coachActions from './actions.js';
import coachGetters from './getters.js';

const coachModule = {
    namespaced: true,
    state(){
        return {
            userIdCoach: false,
            coaches: [...coaches],
        }
    },
    mutations: coachMutations,
    actions: coachActions,
    getters: coachGetters
}

export default coachModule