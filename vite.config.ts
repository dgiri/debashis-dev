import path from 'path';
import tailwindcss from '@tailwindcss/vite';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3005, // Set the development server port to 3005
    open: true, // Automatically open the browser when the server starts
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/debashis-dev/' : '/',
});
