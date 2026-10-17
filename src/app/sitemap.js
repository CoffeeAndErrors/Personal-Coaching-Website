import { NAV } from '@/lib/content';

// Same origin as metadataBase in layout.js.
const SITE = 'https://liftingmonk-coaching.vercel.app';

export default function sitemap() {
  return NAV.map(({ href }) => ({
    url: `${SITE}${href === '/' ? '' : href}`,
    changeFrequency: href === '/transformations' ? 'weekly' : 'monthly',
    priority: href === '/' ? 1 : 0.8,
  }));
}
