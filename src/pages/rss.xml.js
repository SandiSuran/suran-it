import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Suran-IT | Blog',
    description: 'My journey',
    site: 'https://suran-it.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}