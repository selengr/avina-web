import type { MetadataRoute } from 'next';
import { PATH_PAGE } from '../../routes/paths';
import { portfolioProjects, siteCatalog } from '@/constans/site-catalog';
import { SITE_URL } from '../../config-global';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}${PATH_PAGE.root}`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}${PATH_PAGE.about}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}${PATH_PAGE.services}`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}${PATH_PAGE.portfolio.root}`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}${PATH_PAGE.contact}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}${PATH_PAGE.search}`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
  ];

  const catalogPages = siteCatalog
    .filter((item) => item.kind === 'page' || item.kind === 'service')
    .map((item) => ({
      url: `${SITE_URL}${item.href.split('#')[0]}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const projectPages = portfolioProjects.map((project) => ({
    url: `${SITE_URL}${PATH_PAGE.portfolio.design(project.slug)}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const seen = new Set<string>();
  return [...staticPages, ...catalogPages, ...projectPages].filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
