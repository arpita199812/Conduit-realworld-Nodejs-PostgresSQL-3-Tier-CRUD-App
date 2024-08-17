import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allow access from external IPs
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,  // Ensure the host header is changed to the target
        secure: false,  // Allow proxying to servers with self-signed certificates
      }
    }
  }
})

