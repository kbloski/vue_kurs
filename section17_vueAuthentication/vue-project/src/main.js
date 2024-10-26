import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store";

import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseCard from "./components/ui/BaseCard.vue";

const vueApp = createApp(App);

vueApp.use(store);
vueApp.use(router);
vueApp.component("base-card", BaseCard);
vueApp.component("base-button", BaseButton);
vueApp.component("base-badge", BaseBadge);

vueApp.mount("#app");
