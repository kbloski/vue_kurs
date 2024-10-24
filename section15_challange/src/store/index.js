import {createStore} from 'vuex';
import cartStore from './cart/index.js';
import authStore from './auth/index.js'

const store = createStore({
    modules: {
        cart: cartStore,
        auth: authStore
    },
    state(){
    }
})

export default store;