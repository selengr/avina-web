import { USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_RESET, USER_REGISTER_SUCCESS } from 'redux/action//types';
import { userHttp } from 'api';
import { store } from 'redux/store/Store';
import { setAlert } from '../../../Common';
import { messages } from 'app/pages/participants/messages';
import { t } from 'i18next';

export const UserRegister = (JSONData?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: USER_REGISTER_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        const result = await userHttp.registerUser(JSONData);
        dispatch({
          type: USER_REGISTER_REQUEST,
        });
        try {
          dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: {
              result: result.data,
            },
          });
          store.dispatch(setAlert(true, 'success', `${t(messages.Alert_Global_Success_AddParticipant())}`, 'Done') as any);
        } catch (error) {
          dispatch({
            type: USER_REGISTER_FAILED,
          });
          store.dispatch(setAlert(true, 'error', `${t(messages.Alert_Global_Error_AddParticipant())}`, 'Alert') as any);
        }
      };
  }
};
