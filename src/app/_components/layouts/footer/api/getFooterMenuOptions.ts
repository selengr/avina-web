import httpService from '@/services/api/http-service';
import { IMenuProps, IMobileMenuTypes } from '@/types/api/mobile-menu.types';
import { fallbackNavMenus } from '../../shared/fallback-nav-menus';
import { HOST_API_KEY } from '../../../../../../config-global';

export const getFooterMenuOptions = async (): Promise<IMenuProps[]> => {
  if (!HOST_API_KEY) {
    return fallbackNavMenus.filter((item) => item.link !== '/');
  }

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

  return fallbackNavMenus.filter((item) => item.link !== '/');
};
