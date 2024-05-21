import { GROUP_DELETE_FAILED, GROUP_DELETE_REQUEST, GROUP_DELETE_RESET, GROUP_DELETE_SUCCESS } from 'redux/action/types';
import { groupHttp } from 'api';
import { setPrompt } from 'redux/action/creators/Common';
import { store } from 'redux/store/Store';

export const GroupDelete = (data?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: GROUP_DELETE_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: GROUP_DELETE_REQUEST,
        });
        try {
          const result = await groupHttp.remove(data);
          dispatch({
            type: GROUP_DELETE_SUCCESS,
            payload: {
              result: result.data,
            },
          });
        } catch (err) {
          dispatch({
            type: GROUP_DELETE_FAILED,
          });
        } finally {
          store.dispatch(setPrompt(false, '') as any);
        }
      };
  }
};
