import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import store from "./store/index.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", component: HomePage }],
});

export default router;
