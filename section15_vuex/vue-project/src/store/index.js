import { createStore } from "vuex";
import storageModule from "./modules/counter/index.js";
import authModule from './modules/auth/index.js';

const store = createStore({
    modules: {
        // Możesz mieć wiele modułów dla magazynu
        // namespace: { module },
        numbers: storageModule,
        auth: authModule
    },
    state() {
        // state jest funkcją która powinna zwrócić stan obiektu, czyli dane dla całej aplikacji
        return {
            counter: 0,
        };
    },
    // Mutacje (mutations) w Vuex to mechanizm, który służy do zmieniania stanu w store (centralnym magazynie danych w Vue.js). Mutacje są jedynym sposobem na bezpośrednią modyfikację stanu w Vuex. Każda mutacja definiuje synchroniczną operację, która zmienia stan i jest wywoływana za pomocą funkcji commit.
    // Mutacje muszą być synchroniczne, nie mogą wykonywać kodu asynchronicznego, w tym pomagają actions
    mutations: {
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        }
    },
    // Dispatch mogą robić to samo co mutacje ale działając asynchronicznie, jednak nie powinieneś bezpośrednio z wnętrza akcji manipulować state
    actions: {
        decrement( context, _ ){
            context.commit('decrement')
        }
    },
    getters: {
        getCounter(state, getters){
            return state.counter
        },
        finalCounter( state, getters){
            return getters.getCounter()
        }
    },
});

export default store;
