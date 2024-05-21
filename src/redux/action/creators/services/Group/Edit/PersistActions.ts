import { GROUP_EDIT_FAILED, GROUP_EDIT_REQUEST, GROUP_EDIT_RESET, GROUP_EDIT_SUCCESS } from 'redux/action/types';
import { groupHttp } from 'api';
import { setAlert } from 'redux/action/creators/Common';
import { messages } from 'app/pages/group/messages';
import { store } from 'redux/store/Store';
import { t } from 'i18next';

export const GroupEdit = (QS: any, data: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: GROUP_EDIT_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: GROUP_EDIT_REQUEST,
        });
        try {
          const result = await groupHttp.edit(QS, data);
          dispatch({
            type: GROUP_EDIT_SUCCESS,
            payload: {
              result: result.data,
            },
          });
          store.dispatch(setAlert(true, 'success', `${t(messages.Alert_GroupForm_Success_EditGroup())}`, 'Done') as any);
        } catch (err) {
          dispatch({
            type: GROUP_EDIT_FAILED,
          });
          store.dispatch(setAlert(true, 'error', `${t(messages.Alert_GroupForm_Error_EditGroup())}`, 'Done') as any);
        }
      };
  }
};
