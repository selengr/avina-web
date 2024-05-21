import { mHesamHttp } from 'api';
import { MHESAM_OTPSEND_FAILED, MHESAM_OTPSEND_REQUEST, MHESAM_OTPSEND_RESET, MHESAM_OTPSEND_SUCCESS } from '../Types/PersistActionTypes';

export const MHesamOTPSend = (QS, JSONData?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: MHESAM_OTPSEND_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: MHESAM_OTPSEND_REQUEST,
        });
        try {
          const result = await mHesamHttp.OTPSend(QS, JSONData);
          dispatch({
            type: MHESAM_OTPSEND_SUCCESS,
            payload: {
              result: result.data,
            },
          });
        } catch (error) {
          dispatch({
            type: MHESAM_OTPSEND_FAILED,
          });
        }
      };
  }
};
