import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

const vueApp = createApp( App );

vueApp.use( router);

vueApp.mount('#app');
