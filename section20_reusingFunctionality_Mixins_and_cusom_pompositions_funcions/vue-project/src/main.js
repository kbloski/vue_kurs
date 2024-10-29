import { createApp } from 'vue';

import App from './App.vue';
import loggerMixin from './mixins/globalMixin';

const app = createApp(App)

// Add global mixin
app.mixin( loggerMixin)

app.mount('#app');
