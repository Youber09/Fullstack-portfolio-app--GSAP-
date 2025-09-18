import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import tailwindAnimated from 'tailwindcss-animated'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),react(),tailwindcss()],
    server: {
    watch: {
      usePolling: true,
    },
    host: true, // makes it accessible from LAN/WSL too
  },
})
