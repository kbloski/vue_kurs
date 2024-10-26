import { createRouter, createWebHistory } from "vue-router";
import UserAuth from "./pages/UserAuth.vue";
import Dashboard from "./pages/Dashboard.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login'},
        { path: '/login', component: UserAuth},
        { path: '/dashboard', component: Dashboard},

    ]
})

export default router;