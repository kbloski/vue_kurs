export default {
    namespaced: true,
    state(){
        return {
            isLoggedIn: false
        }
    },

    mutations: {
        setLogged( state, payload ){
            state.isLoggedIn = Boolean(payload) 
        }
    },
    actions: {
        setAuth( context, payload){
            console.log( payload)
            context.commit( 'setLogged', payload)
        }
    },
    getters: {
        isLoggedIn(state){
            return state.isLoggedIn
        }
    }
}