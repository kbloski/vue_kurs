
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Main from './ui/Main.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Dodanie globalnego komponentu
app.component('Main', Main) 

app.mount('#app')
