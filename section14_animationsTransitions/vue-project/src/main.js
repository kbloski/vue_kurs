import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';
import TheTransition from './pages/TheTransition.vue';

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/', component: TheTransition},
        {path: '/users', component: AllUsers},
        {path: '/goals', component: CourseGoals},
    ]
})

const app = createApp(App);

app.component('base-modal', BaseModal);
app.use(router);

// Nie powoduje startowej animacji dla routes po przejściu na stronę ponieważ instaluje aplikację po załadowaniu routera przez najpierw przechodzi na podany route z pustego adresu a dopiero później instaluje aplikacje
router.isReady().then( ()=>{
    app.mount('#app');
});

