import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";

const appVue = createApp(App);

appVue.use(router);
appVue.use(store);

appVue.mount("#app");
