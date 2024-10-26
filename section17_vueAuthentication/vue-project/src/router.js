import { createRouter, createWebHistory } from "vue-router";
import UserAuth from "./pages/UserAuth.vue";
import Dashboard from "./pages/Dashboard.vue";
import store from "./store/index.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/login" },
        {
            path: "/login",
            component: UserAuth,
            beforeEnter(to, from, next) {
                const isLogged = store.getters["auth/isLoggedIn"];
                if (isLogged) {
                    return next("/dashboard");
                }
                next();
            },
        },
        { path: "/dashboard", component: Dashboard },
    ],
});

router.beforeEach((to, from, next) => {
    const isLogged = store.getters["auth/isLoggedIn"];
    if (to.path === "/dashboard" && !isLogged) next("/login");
    next();
});

export default router;
