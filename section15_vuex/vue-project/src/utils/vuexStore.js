import { createStore } from "vuex";

// Możesz mieć wiele magazynów, stores
export const storeName = createStore({
    state(){
        // state jest funkcją która powinna zwrócić stan obiektu, czyli dane dla całej aplikacji
        return {
            counter: 0
        }
    }
});