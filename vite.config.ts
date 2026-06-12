import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Sitemap({
      hostname: 'https://onerepmaxcalculator.pro',
      dynamicRoutes: ['/', '/zh-CN', '/ko', '/ja', '/de', '/fr', '/es', '/terms', '/privacy', '/about'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
