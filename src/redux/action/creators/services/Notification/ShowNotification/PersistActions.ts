import { adminHttp, mHesamHttp } from 'api';
import { showNotification } from '../../../../../../api/services/adminService';
import { SHOW_NOTIFICATION_FAILED, SHOW_NOTIFICATION_REQUEST, SHOW_NOTIFICATION_RESET, SHOW_NOTIFICATION_SUCCESS } from '../Types/PersistActionTypes';

export const ShowNotification = (type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: SHOW_NOTIFICATION_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: SHOW_NOTIFICATION_REQUEST,
        });
        try {
          const result = await adminHttp.showNotification();
          dispatch({
            type: SHOW_NOTIFICATION_SUCCESS,
            payload: {
              result: result.data,
            },
          });
        } catch (error) {
          dispatch({
            type: SHOW_NOTIFICATION_FAILED,
          });
        }
      };
  }
};
