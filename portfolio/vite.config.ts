import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // 외부 접속 허용
    port: 5175,
    allowedHosts: [
      '.ngrok-free.dev',
      '.ngrok.io',
      '.ngrok.app',
    ],
  },
})
