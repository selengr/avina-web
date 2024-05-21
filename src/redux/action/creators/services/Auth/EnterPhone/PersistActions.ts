import { AUTH_ENTERPHONE_FAILED, AUTH_ENTERPHONE_REQUEST, AUTH_ENTERPHONE_SUCCESS } from 'redux/action//types';
import { authHttp } from 'api';

export const AuthEnterPhone = (JSONData?: any) => {
  return async (dispatch) => {
    const result = await authHttp.enterPhone(JSONData);
    dispatch({
      type: AUTH_ENTERPHONE_REQUEST,
    });
    try {
      dispatch({
        type: AUTH_ENTERPHONE_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (error) {
      dispatch({
        type: AUTH_ENTERPHONE_FAILED,
      });
    }
  };
};
