import { createApp } from "vue";
import { router } from "./utils/router.js";
import { storeName } from "./utils/vuexStore.js";

import App from "./App.vue";
import BaseContainer from "./components/base/BaseContainer.vue";

const appVue = createApp(App);
appVue.component("base-container", BaseContainer);

appVue.use(router);
appVue.use(storeName);

router.isReady().then(() => {
    appVue.mount("#app");
});
