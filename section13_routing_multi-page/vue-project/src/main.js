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
    // linkActiveClass: 'name-active-link-class',
    scrollBehavior(to, from, savedPosition){
        // console.log( to, from, savedPosition)
        if (savedPosition) return savedPosition;
        return {
            left: 0, top: 0
        };
    }
});

// Navigation guards
router.beforeEach( (to, from, next) => {
    console.log('Global beforeEach')
    console.log( to, from)
    // console.log( to.path)

    // next({name: 'team-members', params: {teamId: 't2'} })
    // next()
    if( to.name === 'team-members'){
        next() // - redirect
    } else {
        next({name: 'team-members', params: {teamId: 't2'}})
    }
    // next({name: 'team-members', params, query}) - redirect
    // next(false) - anulowanie przejścia do url
})

const app = createApp(App)
app.use( router )

app.mount('#app');
