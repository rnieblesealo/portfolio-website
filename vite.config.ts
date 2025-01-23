import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = "portfolio-website"

// https://vite.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react()],
    base: `/${base}/`
  }

  return config;
})
