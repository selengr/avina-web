import { ASSESSMENT_EDIT_FAILED, ASSESSMENT_EDIT_REQUEST, ASSESSMENT_EDIT_RESET, ASSESSMENT_EDIT_SUCCESS } from 'redux/action/types';
import { store } from 'redux/store/Store';
import { setAlert } from 'redux/action/creators/Common';
import { assessmentHttp } from 'api';
import { messages } from 'app/pages/assessment/messages';
import { t } from 'i18next';

export const AssessmentEdit = (QS, JSONData?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: ASSESSMENT_EDIT_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: ASSESSMENT_EDIT_REQUEST,
        });
        try {
          const result = await assessmentHttp.edit(QS, JSONData);
          dispatch({
            type: ASSESSMENT_EDIT_SUCCESS,
            payload: {
              result: result.data,
            },
          });
          store.dispatch(setAlert(true, 'success', `${t(messages.Alert_EditAssessment_Success())}`, 'Done') as any);
        } catch (error) {
          dispatch({
            type: ASSESSMENT_EDIT_FAILED,
          });
          store.dispatch(setAlert(true, 'error', `${t(messages.Alert_EditAssessment_Error())}`, 'Alert') as any);
        }
      };
  }
};
