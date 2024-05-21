import { GROUP_SHOWLIST_FAILED, GROUP_SHOWLIST_REQUEST, GROUP_SHOWLIST_SUCCESS } from 'redux/action/types';
import { groupHttp } from 'api';

export const GroupShowList = (QS?: any) => {
  return async (dispatch) => {
    dispatch({
      type: GROUP_SHOWLIST_REQUEST,
    });
    try {
      const result = await groupHttp.groupList(QS);
      dispatch({
        type: GROUP_SHOWLIST_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (err) {
      dispatch({
        type: GROUP_SHOWLIST_FAILED,
      });
      console.log(err);
    }
  };
};
