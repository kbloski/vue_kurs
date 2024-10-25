import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';

const appVue = createApp(App)
appVue.use( router );

appVue.mount('#app')
