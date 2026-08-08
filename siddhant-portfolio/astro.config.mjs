import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://spandey1234.github.io', // CHANGE THIS to your final domain (e.g., siddhantpandey.dev)
  integrations: [tailwind(), mdx()],
  output: 'static', // Best for Cloudflare Pages / GitHub Pages / Azure Static Web Apps
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});