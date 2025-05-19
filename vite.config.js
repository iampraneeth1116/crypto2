import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/crypto2/', // Add this line - should match your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 3000,
    historyApiFallback: true,
    middleware: (app) => {
      app.use((req, res, next) => {
        // Redirect all requests to index.html
        if (!req.url.includes('.')) {
          req.url = '/index.html'
        }
        next()
      })
    }
  },
})
