import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['swiper/react', 'swiper/modules'],
  },
  build: {
    rollupOptions: {
      external: ['swiper/react', 'swiper/modules'],
      output: {
        globals: {
          'swiper/react': 'Swiper',
          'swiper/modules': 'SwiperModules',
        },
      },
    },
  },
});
