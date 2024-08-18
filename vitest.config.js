import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Ensure this matches your backend URL
        changeOrigin: true,
        secure: false, // If you are using HTTPS on the backend, set this to true
      }
    }
  }
});

