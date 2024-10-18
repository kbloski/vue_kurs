import { createApp } from 'vue';
import { createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UserFooter from './components/users/UserFooter.vue';

const router = createRouter({
    history:  createWebHistory(),
    routes: [
        // { path: '/', redirect: '/teams' }, // Przekierowanie na adres
        { 
            name: 'teams',
            path: '/teams', 
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [

                { name: 'team-members', path: ':teamId', props: true , component: TeamMembers } // domyślne ładowanie params z url do zmiennych props dla komponentu, dynamiczne parametry są przekazywane do komponentu jako props
            ]
        }, // aliast działa jak redirect, przekiruje na ten sam komponent
        { path: '/users', components: {
            default: UsersList,
            footer: UserFooter
        } },
        { path: '/:notFound(.*)', component: NotFound}
    ],
    // linkActiveClass: 'name-active-link-class'
});
const app = createApp(App)

app.use( router )

app.mount('#app');
