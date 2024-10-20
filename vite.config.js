import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';

// Vite configuration with asset handling
export default defineConfig({
  plugins: [
    react(),
    Pages(),
  ],
  assetsInclude: ['**/*.png'], // Ensure PNG files are included
  resolve: {
    alias: {
      // Optional: Alias your assets folder for easier imports
      '@assets': '/src/assets',
    },
  },
});
