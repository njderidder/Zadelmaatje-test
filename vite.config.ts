import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // 👇 ZET DEZE REGEL TERUG VOOR GITHUB PAGES:
      base: '/Zadelmaatje-test/', 
      
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      plugins: [react()],
    };
});
