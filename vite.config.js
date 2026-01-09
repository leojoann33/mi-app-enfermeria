import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Enfermería App - PetrescuENF3',
        short_name: 'Enfermería',
        description: 'Aplicación de enfermería y geriatría',
        theme_color: '#518845',
        icons: [
          {
            src: '/iconos/logo_v3.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/iconos/logo_v3.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react']
        }
      }
    }
  }
})
