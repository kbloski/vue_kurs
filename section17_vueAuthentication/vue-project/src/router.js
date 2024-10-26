import { createRouter, createWebHistory } from "vue-router";
import UserAuth from "./pages/UserAuth.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login'},
        { path: '/login', component: UserAuth},
        { path: '/dashboar', component: null},

    ]
})

export default router;