import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

const TheRefs = defineAsyncComponent( ()=> import('./pages/TheRefs.vue'))
const TheMethods = defineAsyncComponent( () => import('./pages/TheMethods.vue'))
const TheComputed = defineAsyncComponent( ()=> import('./pages/TheComputed.vue'))

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/' , redirect: '/refs' },
        { path: '/refs', component: TheRefs},
        { path: '/methods', component: TheMethods},
        { path: '/computed', component: TheComputed},
    ]
})

export default router;