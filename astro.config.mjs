import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bas-breau.com',
  trailingSlash: 'never',
  compressHTML: true,
  image: {
    formats: ['avif', 'webp'],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/merci') && !page.includes('404'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});