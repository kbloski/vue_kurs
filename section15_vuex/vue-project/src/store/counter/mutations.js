export default {
    increment(state, payload) {
        state.counter += payload;
    },
    decrement(state, payload) {
        state.counter -= payload;
    },
};