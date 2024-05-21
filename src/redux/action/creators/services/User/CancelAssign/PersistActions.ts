import { USER_CANCELASSIGN_FAILED, USER_CANCELASSIGN_REQUEST, USER_CANCELASSIGN_SUCCESS } from 'redux/action/types';
import { userHttp } from 'api';

export const UserCancelAssign = (JSONData?: any) => {
  return async (dispatch) => {
    dispatch({
      type: USER_CANCELASSIGN_REQUEST,
    });
    try {
      const result = await userHttp.cancelUserAssign(JSONData);
      dispatch({
        type: USER_CANCELASSIGN_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (error) {
      dispatch({
        type: USER_CANCELASSIGN_FAILED,
      });
    }
  };
};
