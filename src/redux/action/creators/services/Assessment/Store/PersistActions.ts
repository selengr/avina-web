import { ASSESSMENT_STORE_FAILED, ASSESSMENT_STORE_REQUEST, ASSESSMENT_STORE_RESET, ASSESSMENT_STORE_SUCCESS } from 'redux/action//types';
import { store } from 'redux/store/Store';
import { setAlert } from 'redux/action/creators/Common';
import { assessmentHttp } from 'api';
import { messages } from 'app/pages/assessment/messages';
import { t } from 'i18next';

export const AssessmentStore = (JSONData?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: ASSESSMENT_STORE_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        const result = await assessmentHttp.store(JSONData);
        dispatch({
          type: ASSESSMENT_STORE_REQUEST,
        });
        try {
          dispatch({
            type: ASSESSMENT_STORE_SUCCESS,
            payload: {
              result: result.data,
            },
          });
          store.dispatch(setAlert(true, 'success', `${t(messages.Alert_AddAssessment_Success())}`, 'Done') as any);
        } catch (error) {
          dispatch({
            type: ASSESSMENT_STORE_FAILED,
          });
          store.dispatch(setAlert(true, 'error', `${t(messages.Alert_AddAssessment_Error())}`, 'Alert') as any);
        }
      };
  }
};
