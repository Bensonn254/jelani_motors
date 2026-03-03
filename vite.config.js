import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/jelani_motors/',
  plugins: [react()],
  server: {
    allowedHosts: true,
  }
})
