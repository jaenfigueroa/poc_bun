import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// agregar el nombre del repositorio en la ruta base - problema en desplegar en github-pages
// https://vitejs.dev/config/shared-options.html#base
const getBase = process.env.BASE_PATH ? { base: process.env.BASE_PATH } : {}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ...getBase,
  // base: '/poc_bun-workflow',
})
