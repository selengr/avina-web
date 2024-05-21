import { SSO_LOGIN_FAILED, SSO_LOGIN_REQUEST, SSO_LOGIN_SUCCESS } from 'redux/action//types';
import { authHttp } from 'api';

export const SSOLogin = () => {
  return async (dispatch) => {
    const result = await authHttp.ssoMresalat();
    dispatch({
      type: SSO_LOGIN_REQUEST,
    });
    try {
      dispatch({
        type: SSO_LOGIN_SUCCESS,
        payload: {
          result: result.data.token,
        },
      });
    } catch (error) {
      dispatch({
        type: SSO_LOGIN_FAILED,
      });
    }
  };
};
