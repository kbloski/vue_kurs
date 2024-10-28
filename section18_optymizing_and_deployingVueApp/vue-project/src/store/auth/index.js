import { fetchLogin } from "@/api/db";
const localUserKey = 'authUser';

export default {
    namespaced: true,
    data() {
        return {
            authUser: null,
            token: null,
            tokenExperience: null,
        };
    },
    mutations: {
        setAuthUser(state, payload) {
            state.authUser = payload;
        },
    },
    actions: {
        autoLogin(context) {
            const localUser = JSON.parse(
                localStorage.getItem(localUserKey)
            );
            context.dispatch('login', localUser)
        },

        async login(context, payload) {
            const result = await fetchLogin(payload);

            if (result){
                context.commit("setAuthUser", result);
                localStorage.setItem(localUserKey, JSON.stringify(result))
            } 
        },
        logout(context) {
            context.commit("setAuthUser", null);
            localStorage.setItem(localUserKey, null);
        },
    },
    getters: {
        authUser(state) {
            return state.authUser;
        },
        isLoggedIn(state, getters) {
            return !!getters.authUser;
        },
    },
};