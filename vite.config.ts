import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // Dit is de belangrijke regel voor GitHub Pages:
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
      // Zorg dat de react plugin ook daadwerkelijk wordt gebruikt (deze miste in je vorige config maar stond wel geimporteerd)
      plugins: [react()],
    };
});
