import { createStore } from "vuex";

// Możesz mieć wiele magazynów, stores
export const store = createStore({
    state() {
        // state jest funkcją która powinna zwrócić stan obiektu, czyli dane dla całej aplikacji
        return {
            counter: 0,
        };
    },

    // Mutacje (mutations) w Vuex to mechanizm, który służy do zmieniania stanu w store (centralnym magazynie danych w Vue.js). Mutacje są jedynym sposobem na bezpośrednią modyfikację stanu w Vuex. Każda mutacja definiuje synchroniczną operację, która zmienia stan i jest wywoływana za pomocą funkcji commit.
    mutations: {
        increment(state, payload) {
            // this.state.counter++;
            this.state.counter += payload;
        },
        decrement(state, payload) {
            this.state.counter -= payload;
        },
    },
    getters: {
        finalCounter(state){
            return state.counter * 2
        },
        normalizedCounter(state, getters){
            const finalCounter = getters.finalCounter
            return finalCounter > 0 ? finalCounter : 0
        }
    }
});

// mutations: {
//   increment(state, payload) {
//     state.counter += payload.amount
//   }
// }
// // Wywołanie mutacji z payloadem
// store.commit('increment', { amount: 5 })
// console.log(store.state.counter) // Zwróci 5
