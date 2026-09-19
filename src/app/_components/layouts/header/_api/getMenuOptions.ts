import httpService from '@/services/api/http-service';
import { IMobileMenuTypes } from '@/types/api/mobile-menu.types';

export const getMenuOptions = async () => {
  const response = await httpService.get<IMobileMenuTypes>(
    '/api/v1/public/menus/menu-types/header'
  );
  return response?.data?.data?.base_menus;
};
