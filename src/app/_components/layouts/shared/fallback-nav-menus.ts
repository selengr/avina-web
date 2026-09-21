import { IMenuProps } from '@/types/api/mobile-menu.types';
import { PATH_PAGE } from '../../../../../routes/paths';

/** Static menus used when the public menu API is offline. */
export const fallbackNavMenus: IMenuProps[] = [
  { id: 1, title: 'صفحه اصلی', link: PATH_PAGE.root, order: 1, slug: 'home' },
  {
    id: 2,
    title: 'خدمات',
    link: PATH_PAGE.services,
    order: 2,
    slug: 'services',
  },
  {
    id: 3,
    title: 'نمونه کارها',
    link: PATH_PAGE.portfolio.root,
    order: 3,
    slug: 'portfolio',
  },
  { id: 4, title: 'درباره ما', link: PATH_PAGE.about, order: 4, slug: 'about' },
  {
    id: 5,
    title: 'تماس با ما',
    link: PATH_PAGE.contact,
    order: 5,
    slug: 'contact',
  },
];
