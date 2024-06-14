import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/reactMaster/', // GitHub repository 이름으로 변경
  server: {
    proxy: {
      '/api': {
        target: 'https://api.coinpaprika.com/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});