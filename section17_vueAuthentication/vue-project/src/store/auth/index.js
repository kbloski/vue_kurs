import { fetchLogin } from "@/api/db";

export default {
    namespaced: true,
    data(){
        return {
            authUser: null,
            token: null,
            tokenExperience: null
        }
    },
    mutations: {
        setAuthUser( state, payload ){
            state.authUser = payload;
        }
    },
    actions: {
        async login( context, payload){
            context.commit('setAuthUser', null);
            const result = await fetchLogin(payload);
            if (result) context.commit('setAuthUser', result);
        },
        logout( context){
            context.commit('setAuthUser', null)
        }
    },
    getters: {
        authUser( state ){
            return state.authUser
        },
        isLoggedIn( state, getters ){
            return !!getters.authUser;
        },
    }
}