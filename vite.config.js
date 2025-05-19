// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: '/',
//   server: {
//     historyApiFallback: true
//   },
//   build: {
//     outDir: 'dist',
//     assetsDir: 'assets',
//     sourcemap: false
//   }
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
