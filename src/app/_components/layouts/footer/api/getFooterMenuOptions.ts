import httpService from '@/services/api/http-service';
import { IMenuProps, IMobileMenuTypes } from '@/types/api/mobile-menu.types';

const fallbackFooterMenus: IMenuProps[] = [
  { id: 1, title: 'درباره ما', link: '/about', order: 1, slug: 'about' },
  { id: 2, title: 'خدمات', link: '/services', order: 2, slug: 'services' },
  { id: 3, title: 'نمونه کارها', link: '/portfolio', order: 3, slug: 'portfolio' },
  { id: 4, title: 'تماس با ما', link: '/contact', order: 4, slug: 'contact' },
];

export const getFooterMenuOptions = async (): Promise<IMenuProps[]> => {
  try {
    const response = await httpService.get<IMobileMenuTypes>(
      '/api/v1/public/menus/menu-types/footer'
    );
    const menus = response?.data?.data?.base_menus;
    if (Array.isArray(menus) && menus.length > 0) {
      return menus;
    }
  } catch {
    // Fall back to static links when the menu API is offline.
  }

  return fallbackFooterMenus;
};
