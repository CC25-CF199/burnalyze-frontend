import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      'swiper/react': 'swiper/react/swiper-react.js',
      'swiper/css': 'swiper/swiper.min.css',
      'swiper/css/navigation': 'swiper/modules/navigation/navigation.min.css',
    },
  },
  optimizeDeps: {
    include: ['swiper'],
  },
  build: {
    commonjsOptions: {
      include: [/swiper/],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          swiper: ['swiper', 'swiper/react', 'swiper/modules'],
        },
      },
    },
  },
});
