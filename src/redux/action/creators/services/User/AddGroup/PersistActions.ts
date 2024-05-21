import { USER_ADDGROUP_FAILED, USER_ADDGROUP_REQUEST, USER_ADDGROUP_SUCCESS } from 'redux/action//types';
import { userHttp } from 'api';

export const UserAddGroup = (JSONData?: any) => {
  return async (dispatch) => {
    const result = await userHttp.addGroupUser(JSONData);
    dispatch({
      type: USER_ADDGROUP_REQUEST,
    });
    try {
      dispatch({
        type: USER_ADDGROUP_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (error) {
      dispatch({
        type: USER_ADDGROUP_FAILED,
      });
    }
  };
};
