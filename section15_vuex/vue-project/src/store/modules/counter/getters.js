export default {
    finalCounter(state, _, rootState, rootGetters) {
        console.log(state);
        return state.counter * 2;
    },
    normalizedCounter(state, getters) {
        const finalCounter = getters.finalCounter;
        return finalCounter > 0 ? finalCounter : 0;
    },
};