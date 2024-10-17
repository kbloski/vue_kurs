import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";

const vueApp = createApp(App);

vueApp.component("base-card", BaseCard);
vueApp.component('base-button', BaseButton)

vueApp.mount("#app");
