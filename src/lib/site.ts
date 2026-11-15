import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export const SITE_NAME = 'Bíblia e Teologia';
export const SITE_DESCRIPTION =
  'Estudos bíblicos e notícias do mundo evangélico, com linha devocional e fiel às Escrituras.';
export const INSTAGRAM_URL = 'https://www.instagram.com/eliomar_marcolino/';
export const INSTAGRAM_HANDLE = '@eliomar_marcolino';

export const PLANO = {
  titulo: 'Comece pelo Novo Testamento — plano grátis de 7 dias',
  corpo:
    '7 leituras do Novo Testamento, de Marcos a Filipenses, com o contexto pra você entender o que está lendo.',
  botao: 'Quero o plano grátis',
  url: 'https://eliomarmarcolino22-s2417v.systeme.io/89ee3edb',
};

export const CATEGORIAS = [
  { nome: 'Estudos', slug: 'estudos' },
  { nome: 'Notícias', slug: 'noticias' },
] as const;

/** Monta um caminho interno respeitando o `base` do Astro. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.replace(/^\/+/, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}

export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function categoriaSlug(nome: string): string {
  return slugify(nome);
}

const fmt = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});
export function formatDate(d: Date): string {
  return fmt.format(d);
}

/**
 * Posts visíveis: em produção, rascunhos (`draft: true`) ficam de fora.
 * No `astro dev`, aparecem (com selo "Rascunho").
 */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('posts', ({ data }) =>
    import.meta.env.PROD ? data.draft !== true : true,
  );
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function postUrl(post: Post): string {
  return url(`posts/${post.id}/`);
}
