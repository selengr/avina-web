import { USER_SHOWONE_FAILED, USER_SHOWONE_REQUEST, USER_SHOWONE_SUCCESS } from 'redux/action/types';
import { userHttp } from 'api';

export const UserShowOne = (QS, option?: any) => {
  return async (dispatch) => {
    dispatch({
      type: USER_SHOWONE_REQUEST,
    });
    try {
      const result = await userHttp.showOneUser(QS, option);
      dispatch({
        type: USER_SHOWONE_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (err) {
      dispatch({
        type: USER_SHOWONE_FAILED,
      });
      console.log(err);
    }
  };
};
