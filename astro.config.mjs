// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://almenarasecurity.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
    fallback: {
      es: 'en',
    },
  },
  integrations: [
    sitemap({
      filter: (page) => {
        // Exclude Astro's i18n fallback ghost pages (EN slugs under /es/)
        const ghostPaths = [
          '/es/about/', '/es/contact/', '/es/cookies/', '/es/privacy/',
          '/es/legal-notice/', '/es/services/pentesting/',
          '/es/services/awareness-training/', '/es/services/consulting/',
          '/es/services/secure-development/', '/es/services/pay-per-finding/',
        ];
        return !ghostPaths.some((p) => page.endsWith(p));
      },
    }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
