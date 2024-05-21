import { adminHttp, mHesamHttp } from 'api';
import { SEND_MULTINOTIFICATIONS_FAILED, SEND_MULTINOTIFICATIONS_REQUEST, SEND_MULTINOTIFICATIONS_RESET, SEND_MULTINOTIFICATIONS_SUCCESS } from '../Types/PersistActionTypes';
import { sendMultiNotifications } from '../../../../../../api/services/adminService';

export const SendMultiNotifications = (JSONData?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: SEND_MULTINOTIFICATIONS_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: SEND_MULTINOTIFICATIONS_REQUEST,
        });
        try {
          const result = await adminHttp.sendMultiNotifications(JSONData);
          dispatch({
            type: SEND_MULTINOTIFICATIONS_SUCCESS,
            payload: {
              result: result.data,
            },
          });
        } catch (error) {
          dispatch({
            type: SEND_MULTINOTIFICATIONS_FAILED,
          });
        }
      };
  }
};
