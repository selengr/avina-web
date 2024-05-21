import { MHESAM_PURCHASEUPDATE_FAILED, MHESAM_PURCHASEUPDATE_REQUEST, MHESAM_PURCHASEUPDATE_RESET, MHESAM_PURCHASEUPDATE_SUCCESS } from 'redux/action/types';
import { mHesamHttp } from 'api';

export const MHesamPurchaseUpdate = (JSONData?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: MHESAM_PURCHASEUPDATE_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: MHESAM_PURCHASEUPDATE_REQUEST,
        });
        try {
          const result = await mHesamHttp.purchaseUpdate(JSONData);
          dispatch({
            type: MHESAM_PURCHASEUPDATE_SUCCESS,
            payload: {
              result: result.data,
            },
          });
        } catch (error) {
          dispatch({
            type: MHESAM_PURCHASEUPDATE_FAILED,
          });
        }
      };
  }
};
