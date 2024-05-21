import { USER_DELETE_FAILED, USER_DELETE_REQUEST, USER_DELETE_RESET, USER_DELETE_SUCCESS } from 'redux/action/types';
import { userHttp } from 'api';
import { setAlert, setPrompt } from 'redux/action/creators/Common';
import { messages } from 'app/pages/participants/messages';
import { store } from 'redux/store/Store';
import { t } from 'i18next';

export const UserDelete = (data?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: USER_DELETE_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: USER_DELETE_REQUEST,
        });
        try {
          const result = await userHttp.removeUser(data);
          dispatch({
            type: USER_DELETE_SUCCESS,
            payload: {
              result: result.data,
            },
          });
          store.dispatch(setAlert(true, 'success', `${t(messages.Alert_Global_Success_DeleteParticipant())}`, 'Done') as any);
        } catch (err) {
          dispatch({
            type: USER_DELETE_FAILED,
          });
          console.log(err);
          store.dispatch(setAlert(true, 'error', `${t(messages.Alert_Global_Error_DeleteParticipant())}`, 'Alert') as any);
        } finally {
          store.dispatch(setPrompt(false, '') as any);
        }
      };
  }
};
