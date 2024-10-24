export default {
    namespaced: true,
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: {
        toggleLogged(state, payload) {
            state.isLoggedIn = payload ? true : false;
        },
    },
    actions: {
        setAuth(context, payload) {
            setTimeout(() => {
                context.commit("toggleLogged", payload);
            }, 500);
        },
    },
    getters: {
        isLogged(state) {
            return state.isLoggedIn;
        },
    },
};