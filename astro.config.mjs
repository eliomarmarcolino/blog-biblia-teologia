// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE e BASE podem ser sobrescritos por variável de ambiente.
// Default: https://eliomarmarcolino.github.io/blog-biblia-teologia/
const SITE = process.env.SITE || 'https://eliomarmarcolino.github.io';
const BASE = process.env.BASE ?? '/blog-biblia-teologia';

export default defineConfig({
  site: SITE,
  base: BASE || '/',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
