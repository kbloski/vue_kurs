export default {
    decrement(context, payload) {
        context.commit("decrement", payload);
    },
    increment(context) {
        setTimeout(() => {
            context.commit("increment", 1);
        }, 400);
    },
    increase(context, payload) {
        console.log(context);
        context.commit("increment", payload);
    }
}