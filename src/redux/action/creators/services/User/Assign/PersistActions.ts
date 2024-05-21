import { USER_ASSIGN_FAILED, USER_ASSIGN_REQUEST, USER_ASSIGN_RESET, USER_ASSIGN_SUCCESS } from 'redux/action//types';
import { userHttp } from 'api';
import { store } from '../../../../../store/Store';
import { setAlert } from '../../../Common';
import i18n from 'i18next';
import { messages } from '../../../../../../app/pages/assessment/messages';

export const UserAssign = (JSONData?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: USER_ASSIGN_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        const result = await userHttp.assignToAssessment(JSONData);
        dispatch({
          type: USER_ASSIGN_REQUEST,
        });
        try {
          dispatch({
            type: USER_ASSIGN_SUCCESS,
            payload: {
              result: result.data,
            },
          });
          store.dispatch(setAlert(true, 'success', `${i18n.t(messages.Alert_GetAssessmentUser_Success())}`, 'Done') as any);
        } catch (error) {
          dispatch({
            type: USER_ASSIGN_FAILED,
          });
          store.dispatch(setAlert(true, 'error', `${i18n.t(messages.Alert_GetAssessmentUser_Error())}`, 'Alert') as any);
        }
      };
  }
};
