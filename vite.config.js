import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/qr-code-component-main-with-react-vite-scss/",
  plugins: [react()],
})
