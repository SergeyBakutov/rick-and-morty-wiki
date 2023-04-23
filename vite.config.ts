import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.join(__dirname, 'src/components'),
      '@context': path.join(__dirname, 'src/context'),
      '@declarations': path.join(__dirname, 'src/declarations'),
      '@helpers': path.join(__dirname, 'src/helpers'),
      '@hooks': path.join(__dirname, 'src/hooks'),
      '@layout': path.join(__dirname, 'src/layout'),
      '@pages': path.join(__dirname, 'src/pages'),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifestFilename: 'manifest.json',
      manifest: {
        name: 'Rick & Morty: Wiki',
        short_name: 'R&M Wiki',
        start_url: '/index.html',
        display: 'standalone',
        background_color: '#FFFFFF',
        theme_color: '#00B2C6',
        orientation: 'portrait-primary',
        icons: [
          {
            src: '/icons/icon-48x48.png',
            type: 'image/png',
            sizes: '48x48',
          },
          {
            src: '/icons/icon-72x72.png',
            type: 'image/png',
            sizes: '72x72',
          },
          {
            src: '/icons/icon-96x96.png',
            type: 'image/png',
            sizes: '96x96',
          },
          {
            src: '/icons/icon-128x128.png',
            type: 'image/png',
            sizes: '128x128',
          },
          {
            src: '/icons/icon-144x144.png',
            type: 'image/png',
            sizes: '144x144',
          },
          {
            src: '/icons/icon-152x152.png',
            type: 'image/png',
            sizes: '152x152',
          },
          {
            src: '/icons/icon-192x192.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'any maskable',
          },
          {
            src: '/icons/icon-284x284.png',
            type: 'image/png',
            sizes: '284x284',
          },
          {
            src: '/icons/icon-512x512.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
})
