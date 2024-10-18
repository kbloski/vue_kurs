import { createApp } from 'vue';
import { createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UserFooter from './pages/UserFooter.vue';

const router = createRouter({
    history:  createWebHistory(),
    routes: [
        // { path: '/', redirect: '/teams' }, // Przekierowanie na adres
        { 
            meta: { needsAuth: true},
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
        },
        // Guard navigation local
        // beforeEnter( to, from, next){
        //     console.log( 'users before ', to, from)
        //     next()
        // } 
    },
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

// Navigation guards Global
router.beforeEach( (to, from, next) => {
    console.log('Global beforeEach')
    console.log( to, from)

    if (to.meta.needsAuth){
        console.log('Needs auth!')
    }
    // console.log( to.path)

    
    next()
    // if( to.name === 'team-members'){
    //     next() // - redirect
    // } else {
    //     next({name: 'team-members', params: {teamId: 't2'}})
    // }

    // next({name: 'team-members', params, query}) - redirect
    // next(false) - anulowanie przejścia do url
})

router.afterEach( (to,from) => {
    //  sending analytics data
    console.log('Global after Each')
    console.log(to, from)
})

const app = createApp(App)
app.use( router )

app.mount('#app');