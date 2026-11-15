// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Publicação no GitHub Pages (project page):
//   https://eliomarmarcolino.github.io/blog-biblia-teologia/
const DEFAULT_SITE = 'https://eliomarmarcolino.github.io';
const DEFAULT_BASE = '/blog-biblia-teologia';

// Overrides opcionais por variável de ambiente (ex.: domínio próprio no futuro).
//   SITE=https://exemplo.com BASE= npm run build   → servido na raiz
const SITE = process.env.SITE || DEFAULT_SITE;
const BASE = process.env.BASE ?? DEFAULT_BASE;

export default defineConfig({
  site: SITE,
  base: BASE || '/',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
