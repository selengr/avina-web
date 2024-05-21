import { AUTH_ENTERCODE_FAILED, AUTH_ENTERCODE_REQUEST, AUTH_ENTERCODE_SUCCESS } from 'redux/action//types';
import { authHttp } from 'api';

export const AuthEnterCode = (JSONData?: any) => {
  return async (dispatch) => {
    const result = await authHttp.enterCode(JSONData);
    dispatch({
      type: AUTH_ENTERCODE_REQUEST,
    });
    try {
      dispatch({
        type: AUTH_ENTERCODE_SUCCESS,
        payload: {
          result: result.data.token,
        },
      });
    } catch (error) {
      dispatch({
        type: AUTH_ENTERCODE_FAILED,
      });
    }
  };
};
