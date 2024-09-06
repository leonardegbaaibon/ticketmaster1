import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
        },
      },
    },
  },
  server: {
    historyApiFallback: true,  // Enable history API fallback for client-side routing
  },
});
