import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: '/coaches' },
        { path: "/coaches", component: null, children:[
            { path: "/contact", component: null }, // /coaches/c1/contact
        ] },
        { path: "/coaches/:id", component: null },
        { path: "/register", component: null },
        { path: "/requests", component: null },
        { path: "/:catchAll(.*)", component: null },
    ],
});

export default router;
