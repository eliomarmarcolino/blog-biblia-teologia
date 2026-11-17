# Bíblia e Teologia — blog

Blog estático de estudos bíblicos e notícias evangélicas de **Eliomar Marcolino** ([@eliomar_marcolino](https://www.instagram.com/eliomar_marcolino/)), feito com [Astro](https://astro.build).

> **Status:** no ar via GitHub Pages em `https://eliomarmarcolino.github.io/blog-biblia-teologia/`. O domínio próprio **`eliomarmarcolino.com.br`** está em preparação (branch `dominio-proprio`) e **ainda não está no ar** — o DNS ainda não foi configurado.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321/
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
| `SITE` | `https://eliomarmarcolino.com.br` | domínio do site (sitemap, RSS, canonical, `og:url`) |
| `BASE` | `/` | subcaminho do site (raiz) |

Padrão final: `https://eliomarmarcolino.com.br/`. O arquivo `public/CNAME` (copiado para `dist/CNAME`) contém `eliomarmarcolino.com.br`.

Para gerar com outro endereço/subcaminho, sobrescreva no ambiente:

```bash
SITE=https://exemplo.com BASE=/subcaminho npm run build
```

Os links internos usam `import.meta.env.BASE_URL` (função `url()` em `src/lib/site.ts`), então funcionam com qualquer `BASE`.

## Publicação (GitHub Pages via Actions)

O deploy é feito pelo workflow `.github/workflows/deploy.yml` (fonte do Pages: **GitHub Actions**). Ele roda a cada push na `main` e também manualmente (**Actions → “Deploy para GitHub Pages” → Run workflow**).

No Actions, `SITE` e `BASE` **não** usam os padrões do `astro.config.mjs`: vêm das configurações do Pages via `actions/configure-pages` (`origin` e `base_path`). Por isso o domínio não é fixado no workflow:

- **Hoje** (sem domínio customizado no Pages): o build sai para o endereço `github.io` com o subcaminho do repositório.
- **Depois** que o domínio customizado for configurado no Pages: o build passa a sair para `https://eliomarmarcolino.com.br` na raiz, sem mudar o workflow.

### Passos para ativar o domínio próprio (ainda não feitos)

1. No Registro.br, configurar o DNS: registros `A`/`AAAA` do apex `eliomarmarcolino.com.br` para os IPs do GitHub Pages e `CNAME` de `www` para `eliomarmarcolino.github.io`.
2. Mesclar a branch `dominio-proprio` na `main` (traz `public/CNAME` e os novos padrões).
3. Em **Settings → Pages → Custom domain**, informar `eliomarmarcolino.com.br`, aguardar a verificação do DNS e marcar **Enforce HTTPS**.
4. Conferir o próximo deploy: canonical, RSS e sitemap devem apontar para `https://eliomarmarcolino.com.br/`.
