import { createStore } from "vuex";
import storageModule from "./counter/index.js";

const store = createStore({
    modules: {
        // Możesz mieć wiele modułów dla magazynu
        numbers: storageModule,
    },
    state() {
        // state jest funkcją która powinna zwrócić stan obiektu, czyli dane dla całej aplikacji
        return {
            counter: 0,
            isLoggedIn: false,
        };
    },
    // Mutacje (mutations) w Vuex to mechanizm, który służy do zmieniania stanu w store (centralnym magazynie danych w Vue.js). Mutacje są jedynym sposobem na bezpośrednią modyfikację stanu w Vuex. Każda mutacja definiuje synchroniczną operację, która zmienia stan i jest wywoływana za pomocą funkcji commit.
    // Mutacje muszą być synchroniczne, nie mogą wykonywać kodu asynchronicznego, w tym pomagają actions
    mutations: {
        toggleLogged(_, payload) {
            this.state.isLoggedIn = payload ? true : false;
        },
    },
    // Dispatch mogą robić to samo co mutacje ale działając asynchronicznie, jednak nie powinieneś bezpośrednio z wnętrza akcji manipulować state
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
});

export default store;
