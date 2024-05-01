import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@hooks': '/src/hooks'
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.js'
  }
})
