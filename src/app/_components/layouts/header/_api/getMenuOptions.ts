import httpService from '@/services/api/http-service';
import { IMenuProps, IMobileMenuTypes } from '@/types/api/mobile-menu.types';
import { fallbackNavMenus } from '../../shared/fallback-nav-menus';
import { HOST_API_KEY } from '../../../../../../config-global';

export const getMenuOptions = async (): Promise<IMenuProps[]> => {
  if (!HOST_API_KEY) {
    return fallbackNavMenus;
  }

  try {
    const response = await httpService.get<IMobileMenuTypes>(
      '/api/v1/public/menus/menu-types/header'
    );
    const menus = response?.data?.data?.base_menus;
    if (Array.isArray(menus) && menus.length > 0) {
      return menus;
    }
  } catch {
    // Keep browsing with static links when the API is down.
  }

  return fallbackNavMenus;
};
