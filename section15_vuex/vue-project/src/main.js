import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import BaseContainer from './components/base/BaseContainer.vue';

import VuexInfo from './pages/VuexInfo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: VuexInfo }
    ]
});

const appVue = createApp(App)
appVue.component('base-container', BaseContainer)

appVue.use( router );

router.isReady().then( ()=> {
    appVue.mount('#app')
})
