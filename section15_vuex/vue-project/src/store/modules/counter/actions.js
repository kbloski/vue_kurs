export default {
    decrement(context, payload) {
        context.commit("decrement", payload);
    },
    increment(context) {
        setTimeout(() => {
            context.commit("increment", 1);
        }, 400);
    },
    add( context, payload){
        context.commit('increment', payload)
    },
    increase(context, payload) {
        context.commit("increment", payload);
    }
}