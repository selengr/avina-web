import type { MetadataRoute } from 'next';
import { SITE_URL } from '../../config-global';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/ali', '/up'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
