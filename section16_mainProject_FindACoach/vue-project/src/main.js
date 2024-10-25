import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";

import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";

const appVue = createApp(App);

appVue.use(router);
appVue.use(store);

appVue.component('base-card', BaseCard);
appVue.component('base-button', BaseButton);
appVue.component('base-badge', BaseBadge);

appVue.mount("#app");
