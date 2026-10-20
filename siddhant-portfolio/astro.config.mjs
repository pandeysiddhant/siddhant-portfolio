import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://pandeysiddhant.github.io',
  base: '/siddhant-portfolio',
  integrations: [tailwind(), mdx()],
  output: 'static', // Best for Cloudflare Pages / GitHub Pages / Azure Static Web Apps
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});