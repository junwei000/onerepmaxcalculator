import './assets/main.css'

import { ViteSSG } from 'vite-ssg'

import App from './App.vue'

const routes = [
  { path: '/', component: () => import('./pages/Home.vue') },
  { path: '/zh-CN', component: () => import('./pages/Home.vue') },
  { path: '/ko', component: () => import('./pages/Home.vue') },
  { path: '/ja', component: () => import('./pages/Home.vue') },
  { path: '/de', component: () => import('./pages/Home.vue') },
  { path: '/fr', component: () => import('./pages/Home.vue') },
  { path: '/es', component: () => import('./pages/Home.vue') },
  { path: '/terms', component: () => import('./pages/Terms.vue') },
  { path: '/privacy', component: () => import('./pages/Privacy.vue') },
  { path: '/about', component: () => import('./pages/About.vue') },
]

export const createApp = ViteSSG(App, { routes })
