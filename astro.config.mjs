// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domínio próprio (GitHub Pages com domínio customizado), servido na raiz:
//   https://eliomarmarcolino.com.br/
// O arquivo public/CNAME (copiado para dist/CNAME) declara esse domínio.
const DEFAULT_SITE = 'https://eliomarmarcolino.com.br';
const DEFAULT_BASE = '/';

// Overrides opcionais por variável de ambiente. No GitHub Actions o workflow
// passa SITE/BASE vindos de actions/configure-pages (as configurações do Pages).
//   SITE=https://exemplo.com BASE=/subcaminho npm run build
const SITE = process.env.SITE || DEFAULT_SITE;
const BASE = process.env.BASE || DEFAULT_BASE;

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
