# Bíblia e Teologia — blog

Blog estático de estudos bíblicos e notícias evangélicas de **Eliomar Marcolino** ([@eliomar_marcolino](https://www.instagram.com/eliomar_marcolino/)), feito com [Astro](https://astro.build).

> ⚠️ **O site ainda NÃO está no ar.** Nada foi publicado, não existe repositório remoto e o deploy está desligado. A publicação depende do OK do Eliomar.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321/blog-biblia-teologia/
npm run build    # gera o site estático em dist/
npm run preview  # serve o dist/ localmente
```

Requer Node 22+ (testado com Node 24).

## Escrever um post

Crie um arquivo `.md` (ou `.mdx`) em `src/content/posts/`. O nome do arquivo vira o endereço: `meu-estudo.md` → `/posts/meu-estudo/`.

```md
---
title: "Título do post"
description: "Resumo em uma ou duas frases."
pubDate: 2026-11-15
tags: ["Evangelhos", "oração"]
categoria: "Estudos"   # "Estudos" ou "Notícias"
draft: false           # true = rascunho
---

Texto do post em Markdown…
```

Todos os campos são obrigatórios (o build falha se faltar algum).

### Rascunhos (`draft: true`)

- Aparecem **só no `npm run dev`**, com o selo “Rascunho / exemplo”.
- **Não entram no build de produção**: ficam fora da home, das páginas de categoria/tag, do RSS e do sitemap.
- O post `josue-1-9-seja-forte-e-corajoso.md` é um exemplo e está como rascunho.

## Páginas

- `/` — home com destaque, lista de posts e CTA do plano grátis
- `/posts/<slug>/` — post (com CTA do plano no final)
- `/categoria/estudos/`, `/categoria/noticias/`, `/tag/<tag>/`
- `/sobre/`, `/404.html`, `/rss.xml`, `/sitemap-index.xml`

O texto e o link do plano grátis ficam em `src/lib/site.ts` (`PLANO`).

## Variáveis `SITE` e `BASE`

Definidas em `astro.config.mjs`:

| Variável | Padrão | Uso |
|---|---|---|
| `SITE` | `https://eliomarmarcolino.github.io` | domínio do site (sitemap, RSS, canonical) |
| `BASE` | `/blog-biblia-teologia` | subcaminho do site |

Padrão final: `https://eliomarmarcolino.github.io/blog-biblia-teologia/`.

Exemplo com domínio próprio na raiz:

```bash
SITE=https://www.meudominio.com.br BASE=/ npm run build
```

Os links internos usam `import.meta.env.BASE_URL` (função `url()` em `src/lib/site.ts`), então funcionam com qualquer `BASE`.

## Publicar no GitHub Pages (quando aprovado)

O repositório é **privado** e o GitHub Pages está **desligado**. O workflow de deploy fica guardado fora da pasta de workflows, em `deploy/github-pages-deploy.yml`, então nada roda nem é publicado.

Quando o Eliomar aprovar:

1. Lembre que, em conta gratuita, o GitHub Pages só publica a partir de repositório **público** (repo privado exige GitHub Pro).
2. Mova `deploy/github-pages-deploy.yml` para `.github/workflows/deploy.yml` e faça o commit (pelo site do GitHub, ou por um login com o escopo `workflow`).
3. No GitHub: **Settings → Pages → Source: GitHub Actions**.
4. Rode o workflow manualmente em **Actions → “Deploy para GitHub Pages (manual)” → Run workflow**. Ele passa `SITE` e `BASE` automaticamente.
5. (Opcional) Para publicar a cada push na `main`, acrescente `push: branches: [main]` no `on:` do workflow.
6. Se o nome do repositório ou o domínio mudarem, confira `SITE`/`BASE`.
