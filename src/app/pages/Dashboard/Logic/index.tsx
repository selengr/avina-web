import { Service } from 'utils';
import * as Types from 'redux/action/types';

export const getDashboard = async (limit?) => {
  await Service.Request(Types.PROFILE_DASHBOARD_REQUEST, limit);
};

export const showNotification = async () => {
  await Service.Request(Types.SHOW_NOTIFICATION_REQUEST);
};
