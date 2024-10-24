import { createRouter, createWebHistory } from "vue-router";
import VuexInfo from "../pages/InfoPage.vue";
import StoragePage from "../pages/StoragePage.vue";
import AuthPage from "@/pages/AuthPage.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: VuexInfo },
        { path: "/storage", component: StoragePage },
        { path: "/auth", component: AuthPage },
    ],
});
