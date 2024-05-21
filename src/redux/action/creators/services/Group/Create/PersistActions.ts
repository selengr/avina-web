import { GROUP_CREATE_FAILED, GROUP_CREATE_REQUEST, GROUP_CREATE_RESET, GROUP_CREATE_SUCCESS } from 'redux/action//types';
import { groupHttp } from 'api';
import { setAlert } from '../../../Common';
import { messages } from 'app/pages/group/messages';
import { store } from 'redux/store/Store';
import { t } from 'i18next';

export const GroupCreat = (JSONData?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: GROUP_CREATE_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        const result = await groupHttp.create(JSONData);
        dispatch({
          type: GROUP_CREATE_REQUEST,
        });
        try {
          dispatch({
            type: GROUP_CREATE_SUCCESS,
            payload: {
              result: result.data,
            },
          });

          store.dispatch(setAlert(true, 'success', `${t(messages.Alert_GroupForm_Success_AddGroup())}`, 'Done') as any);
        } catch (error) {
          dispatch({
            type: GROUP_CREATE_FAILED,
          });
          dispatch(setAlert(true, 'error', `${t(messages.Alert_GroupForm_Error_AddGroup())}`, 'Done') as any);
        }
      };
  }
};
