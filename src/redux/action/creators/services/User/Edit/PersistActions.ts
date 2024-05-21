import { USER_EDIT_FAILED, USER_EDIT_REQUEST, USER_EDIT_RESET, USER_EDIT_SUCCESS } from 'redux/action/types';
import { userHttp } from 'api';
import { setAlert } from 'redux/action/creators/Common';
import { messages } from 'app/pages/participants/messages';
import { store } from 'redux/store/Store';
import { t } from 'i18next';

export const UserEdit = (QS: any, data: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: USER_EDIT_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: USER_EDIT_REQUEST,
        });
        try {
          const result = await userHttp.editUser(QS, data);
          dispatch({
            type: USER_EDIT_SUCCESS,
            payload: {
              result: result.data,
            },
          });
          store.dispatch(setAlert(true, 'success', `${t(messages.Alert_ParticipantsForm_Success_EditParticipant())}`, 'Done') as any);
        } catch (err) {
          dispatch({
            type: USER_EDIT_FAILED,
          });
          store.dispatch(setAlert(true, 'error', `${t(messages.Alert_ParticipantsForm_Error_EditParticipant())}`, 'Alert') as any);
          console.log(err);
        }
      };
  }
};
