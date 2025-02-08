import { createRouter, createWebHistory, routerKey} from 'vue-router'

// import TeamsList from "../pages/TeamsList.vue";
const TeamsList = () => import('../pages/TeamsList.vue') // dynamic load pages
import UsersList from "../pages/UsersList.vue";
import TeamMembers from "../components/teams/TeamMembers.vue";
import NotFound from "../pages/NotFound.vue";
import TeamsFooter from "../pages/TeamsFooter.vue";
import UserFooter from "../pages/UserFooter.vue";

const vueRouter = createRouter({
    history: createWebHistory(), // use default explorer history
    scrollBehavior( to, from, savedLastPosition){
        // behavior scroll when i go back to side
        if (savedLastPosition) return savedLastPosition;
        return { left: 0, top: 0}
    },
    // linkActiveClass: 'name-class-for-active-link',

    // Routing application
    routes: [
        { path: '/', redirect: '/teams' }, // goto other side when enter on link
        { 
            meta: { needsAuth: true }, // meta dowolne dane przekazane na stronę
            path: '/teams', // side url
            name: 'teams', 
            components: { 
                // komponenty przekazane do danego url dla <router-view></router-view>
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [ // zagnieżdzone ścieżki
                { 
                    name: 'team-members',
                    path: ':teamId',
                    props: true, // przekazywanie dynamicznych wartości z url do props
                    component: TeamMembers
                }
            ]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UserFooter
            },

            // Guard Navigation Local
            beforeEnter(to, from, next){
                // run before goto this url
                console.log('/users beforeEnter(){}');
                next();
            }
        },
        { path: '/:notFound(.*)', component: NotFound}
    ]
});


// Before goto url, can use to check access
vueRouter.beforeEach( (to,from,next) => {
    console.log( 'Global router.beforeEach()' );

    // Global meta data for url
    if (to.meta) console.log(`Global meta is avaible: `, to.meta);

    next();
    // next( '/teams')
    // next( {name:'team-members', params: { teamId: 't2'}, query: { some: 'someQuery'}})
    // next(false) cancel goto next url
})

// Can use to analytics data
vueRouter.afterEach( (to, from) => {
    console.log( 'Global router.afterEach()');
})

export { vueRouter };