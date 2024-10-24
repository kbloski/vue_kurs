import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import VuexInfo from './pages/VuexInfo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: VuexInfo }
    ]
});

const appVue = createApp(App)

appVue.use( router );

router.isReady().then( ()=> {
    appVue.mount('#app')
})
