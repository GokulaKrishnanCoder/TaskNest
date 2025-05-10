// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/TaskNest/', // ✅ make sure it's empty
  plugins: [react()],
})
