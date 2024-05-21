import { ALLUSERS_SHOWLIST_FAILED, ALLUSERS_SHOWLIST_REQUEST, ALLUSERS_SHOWLIST_SUCCESS, USER_SHOWLIST_FAILED, USER_SHOWLIST_REQUEST, USER_SHOWLIST_SUCCESS } from 'redux/action/types';
import { userHttp } from 'api';

export const UserShowList = (QS?: any) => {
  return async (dispatch) => {
    dispatch({
      type: USER_SHOWLIST_REQUEST,
    });
    try {
      const result = await userHttp.userList(QS);
      dispatch({
        type: USER_SHOWLIST_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (err) {
      dispatch({
        type: USER_SHOWLIST_FAILED,
      });
      console.log(err);
    }
  };
};
export const AllUsersShowList = (QS?: any) => {
  return async (dispatch) => {
    dispatch({
      type: ALLUSERS_SHOWLIST_REQUEST,
    });
    try {
      const result = await userHttp.userList(QS);
      dispatch({
        type: ALLUSERS_SHOWLIST_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (err) {
      dispatch({
        type: ALLUSERS_SHOWLIST_FAILED,
      });
      console.log(err);
    }
  };
};
