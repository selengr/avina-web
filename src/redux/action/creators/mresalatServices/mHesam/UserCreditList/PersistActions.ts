import { MHESAM_USERCREDITLIST_FAILED, MHESAM_USERCREDITLIST_REQUEST, MHESAM_USERCREDITLIST_RESET, MHESAM_USERCREDITLIST_SUCCESS } from 'redux/action/types';
import { mHesamHttp } from 'api';

export const MHesamUserCreditList = (JSONData?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: MHESAM_USERCREDITLIST_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: MHESAM_USERCREDITLIST_REQUEST,
        });
        try {
          const result = await mHesamHttp.userCreditList(JSONData);
          dispatch({
            type: MHESAM_USERCREDITLIST_SUCCESS,
            payload: {
              result: result.data,
            },
          });
        } catch (error) {
          dispatch({
            type: MHESAM_USERCREDITLIST_FAILED,
          });
        }
      };
  }
};
