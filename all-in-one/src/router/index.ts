import { createRouter, createWebHistory } from 'vue-router'

import OptionalApi from '../features/optionalApi/OptionalApi.vue'

// Dynamiczne importowanie komponentu
const ContextApi = () => import('../features/contextApi/ContextApi.vue')
const TheRouter = () => import('../features/theVueRouter/TheRouter.vue')
const TheRouterChild = () => import('../features/theVueRouter/TheChild.vue')
const ChildHeader = () => import('../features/theVueRouter/TheChildHeader.vue')

// Routing

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // linkActiveClass: 'name-class-for-active-link',

  scrollBehavior(to, from, savedPosition) {
    // Jeśli mamy zapisane położenie (np. podczas nawigacji wstecz)
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 } // Zawsze przewijaj na górę strony
    }
  },

  routes: [
    { path: '/', redirect: '/optional-api/testowe-id' },
    {
      path: '/optional-api/:id',
      name: 'optional-api',
      component: OptionalApi,
    },
    {
      path: '/context-api/:id', // dynamiczne id
      name: 'context-api',
      component: ContextApi,
    },
    {
      path: '/the-vue-router',
      name: 'theVueRouter',
      component: TheRouter,
      children: [
        {
          path: ':childId',
          name: 'vue-children',
          components: {
            header: ChildHeader,
            default: TheRouterChild,
          },
          meta: { needsAuth: true }, // meta dowolne dane przekazane na stronę, ktore mozna uzywac w guardach
          beforeEnter: (to, from, next) => {
            console.log('beforeEnter from vue-children - needsAuth', to.meta.needsAuth)
            next()
          },
        },
      ],
    },
    { path: '/:notFound(.*)' , redirect: '/'}
  ],
})


router.beforeEach( (to, from, next) => {
  console.log( 'router.beforeEach', to.meta)
  next()
})

export default router

