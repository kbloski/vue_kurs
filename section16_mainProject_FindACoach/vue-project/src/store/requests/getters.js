export default {
    requests(state, getters, rootState, rootGetters) {
        console.log( state.requests)
        return state.requests.filter( req => req.coachId === rootGetters.userId);
    },
    hasRequests(_, getters){
        return getters.requests && getters.requests.length > 0
    }
};