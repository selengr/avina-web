import { ASSESSMENT_ORDER_FAILED, ASSESSMENT_ORDER_REQUEST, ASSESSMENT_ORDER_RESET, ASSESSMENT_ORDER_SUCCESS } from 'redux/action/types';
import { assessmentHttp } from 'api';
import { store } from 'redux/store/Store';
import { setAlert } from 'redux/action/creators/Common';
import { t } from 'i18next';
import { messages } from 'app/pages/assessment/messages';

export const AssessmentOrder = (JSONData?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: ASSESSMENT_ORDER_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: ASSESSMENT_ORDER_REQUEST,
        });
        try {
          const result = await assessmentHttp.orderAssessment(JSONData);
          dispatch({
            type: ASSESSMENT_ORDER_SUCCESS,
            payload: {
              result: result.data,
            },
          });
          store.dispatch(setAlert(true, 'success', `${t(messages.Alert_AddToCart_Success())}`, 'Done') as any);
        } catch (error) {
          dispatch({
            type: ASSESSMENT_ORDER_FAILED,
          });
          store.dispatch(setAlert(true, 'error', `${t(messages.Alert_Global_Error_AddToCart())}`, 'Alert') as any);
        }
      };
  }
};
