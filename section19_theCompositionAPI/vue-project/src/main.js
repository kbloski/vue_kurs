import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';

const appVue = createApp( App );
appVue.use( router );

appVue.mount('#app');
