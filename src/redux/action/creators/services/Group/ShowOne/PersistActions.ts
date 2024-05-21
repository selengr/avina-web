import { GROUP_SHOWONE_FAILED, GROUP_SHOWONE_REQUEST, GROUP_SHOWONE_SUCCESS } from 'redux/action/types';
import { groupHttp } from 'api';

export const GroupShowOne = (QS, option?: any) => {
  return async (dispatch) => {
    dispatch({
      type: GROUP_SHOWONE_REQUEST,
    });
    try {
      const result = await groupHttp.showOneGroup(QS, option);
      dispatch({
        type: GROUP_SHOWONE_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (err) {
      dispatch({
        type: GROUP_SHOWONE_FAILED,
      });
      console.log(err);
    }
  };
};
