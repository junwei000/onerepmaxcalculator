import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
/* add icons to the library */
library.add(faUserSecret)

const routes = [
    { path: '/', component: () => import('./pages/Home.vue') },
    { path: '/terms', component: () => import('./pages/Terms.vue') },
    { path: '/privacy', component: () => import('./pages/Privacy.vue') },
    { path: '/about', component: () => import('./pages/About.vue') },
]

export const createApp = ViteSSG(
    App,
    { routes },
    ({ app }) => {
        app.component('font-awesome-icon', FontAwesomeIcon)
    },
)
