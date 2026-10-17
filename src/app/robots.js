// Same origin as metadataBase in layout.js.
const SITE = 'https://liftingmonk-coaching.vercel.app';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
