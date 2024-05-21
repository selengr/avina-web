import { AUTH_LOGIN_FAILED, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS } from 'redux/action//types';
import { authHttp } from 'api';

export const AuthLogin = (JSONData?: any) => {
  return async (dispatch) => {
    const result = await authHttp.login(JSONData);
    dispatch({
      type: AUTH_LOGIN_REQUEST,
    });
    try {
      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        payload: {
          result: result.data.token,
        },
      });
    } catch (error) {
      dispatch({
        type: AUTH_LOGIN_FAILED,
      });
    }
  };
};
