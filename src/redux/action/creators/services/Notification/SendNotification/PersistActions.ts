import { adminHttp, mHesamHttp } from 'api';
import { SEND_NOTIFICATION_FAILED, SEND_NOTIFICATION_REQUEST, SEND_NOTIFICATION_RESET, SEND_NOTIFICATION_SUCCESS } from '../Types/PersistActionTypes';
import { sendNotification } from '../../../../../../api/services/adminService';

export const SendNotification = (JSONData?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: SEND_NOTIFICATION_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: SEND_NOTIFICATION_REQUEST,
        });
        try {
          const result = await adminHttp.sendNotification(JSONData);
          dispatch({
            type: SEND_NOTIFICATION_SUCCESS,
            payload: {
              result: result.data,
            },
          });
        } catch (error) {
          dispatch({
            type: SEND_NOTIFICATION_FAILED,
          });
        }
      };
  }
};
