import { createRouter, createWebHistory } from 'vue-router'
import appviewdefault from '@/components/AppBarDefault.vue'
import appview from '@/components/AppView.vue'
import dashboard from '@/views/dashboard'
import login from '@/views/auth/LoginView.vue'
import register from '@/views/auth/RegisterView.vue'
import {useCounterStore} from '@/stores/counter'

const routes = [
    {
        path: '/',
        name: 'appview',
        component: appview,
        beforeEnter: (to:any, from:any, next:any) => {
            console.log(useCounterStore().isLoggedIn)
            if (!useCounterStore().isLoggedIn) next({name: 'register'})
        },
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: dashboard
            }
        ]
    },
    {
        path: '/',
        name: 'register',
        component: register
      },
      {
        path: '/register',
        name: 'register',
        component: register
      },
      {
        path: '/login',
        name: 'login',
        component: login
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
export default router
