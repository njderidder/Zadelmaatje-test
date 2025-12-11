import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // 👇 SLIMME CHECK:
    // Is dit GitHub Actions? Gebruik dan de submap.
    // Is dit CloudCannon of lokaal? Gebruik dan de root.
    const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
    
    return {
      base: isGitHubActions ? '/Zadelmaatje-test/' : '/',
      
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
