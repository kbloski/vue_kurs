import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
// import UserAuth from "./pages/UserAuth.vue";
// import Dashboard from "./pages/Dashboard.vue";
import store from "./store/index.js";

const UserAuth = defineAsyncComponent(() => import("./pages/UserAuth.vue"));
const Dashboard = defineAsyncComponent(() => import("./pages/Dashboard.vue"));

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/login" },
        {
            path: "/login",
            component: UserAuth,
            // beforeEnter(to, from, next) {
            //     const isLogged = store.getters["auth/isLoggedIn"];
            //     console.log( isLogged )
            //     if (isLogged) {
            //         return next("/dashboard");
            //     }
            //     next();
            // },
        },
        { path: "/dashboard", component: Dashboard },
    ],
});

router.beforeEach((to, from, next) => {
    const isLogged = store.getters["auth/isLoggedIn"];
    if (to.path === "/dashboard" && !isLogged) return next("/login");
    
    if(to.path === '/login' && isLogged) return next('/dashboard')
    next();
});

export default router;
