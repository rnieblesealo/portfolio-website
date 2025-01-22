import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { baseName } from "./router"

// https://vite.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react()],
    base: `/${baseName}/`
  }

  return config;
})
