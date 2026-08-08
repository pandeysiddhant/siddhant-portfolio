/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Azure / Databricks Theme
        primary: {
          DEFAULT: '#0078D4', // Azure Blue
          dark: '#005A9E',
          light: '#E6F2FA',
        },
        accent: {
          DEFAULT: '#FF3621', // Databricks Red/Orange
          dark: '#CC2B1A',
        },
        dark: {
          bg: '#0D1117',      // GitHub Dark BG
          card: '#161B22',    // GitHub Dark Card
          border: '#30363D',
        },
        light: {
          bg: '#FFFFFF',
          card: '#F6F8FA',
          border: '#D0D7DE',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
        sans: ['"IBM Plex Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  darkMode: 'class', // Toggle via <html class="dark">
  plugins: [],
};