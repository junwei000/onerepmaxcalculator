import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import Home from './pages/Home.vue'
import Terms from './pages/Terms.vue'
import Privacy from './pages/Privacy.vue'
import About from './pages/About.vue'

/* add icons to the library */
library.add(faUserSecret)

const routes = [
    { path: '/', component: Home },
    { path: '/terms', component: Terms },
    { path: '/privacy', component: Privacy },
    { path: '/about', component: About },
]

export const createApp = ViteSSG(
    App,
    { routes },
    ({ app }) => {
        app.component('font-awesome-icon', FontAwesomeIcon)
    },
)
