import { createApp } from 'vue';
import { vueRouter } from './routes/routing.js';

import App from './App.vue';

// router.afterEach( (to,from) => {
//     //  sending analytics data
//     console.log('Global after Each')
//     console.log(to, from)
// })

const app = createApp(App)
app.use( vueRouter )

app.mount('#app');
