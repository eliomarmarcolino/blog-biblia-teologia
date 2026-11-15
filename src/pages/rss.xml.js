import rss from '@astrojs/rss';
import { getPosts, SITE_NAME, SITE_DESCRIPTION } from '../lib/site';

export async function GET(context) {
  const posts = await getPosts(); // em produção, sem rascunhos
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: new URL(`${base}/`, context.site).href,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: [post.data.categoria, ...post.data.tags],
      link: `${base}/posts/${post.id}/`,
    })),
    customData: '<language>pt-br</language>',
  });
}
