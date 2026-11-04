import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'academy-static-rewrite',
        configureServer(server) {
          server.middlewares.use((req, _res, next) => {
            const url = req.url ? req.url.split('?')[0] : '';
            if (url === '/academy' || url === '/academy/') {
              req.url = '/academy/index.html';
            } else if (url === '/curso' || url === '/curso/') {
              req.url = '/academy/index.html';
            }
            next();
          });
        },
        configurePreviewServer(server) {
          server.middlewares.use((req, _res, next) => {
            const url = req.url ? req.url.split('?')[0] : '';
            if (url === '/academy' || url === '/academy/') {
              req.url = '/academy/index.html';
            } else if (url === '/curso' || url === '/curso/') {
              req.url = '/academy/index.html';
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
