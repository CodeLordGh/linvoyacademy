import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    // Enable edge middleware for i18n routing
    edgeMiddleware: true,
    // Explicitly set Node.js 20 runtime (Vercel deprecated 18.x)
    runtime: 'nodejs20.x',
  }),
  site: 'https://linvoyacademy.com',
  integrations: [
    tailwind(),
    react(),
    // sitemap disabled due to bug with i18n routing - can be added later
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  // Compression and caching
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
