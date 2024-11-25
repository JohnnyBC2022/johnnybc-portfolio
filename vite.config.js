// vite.config.js (originalmente, sin configuraciones adicionales de PostCSS)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
