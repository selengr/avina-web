import { ASSESSMENT_ACTIVATION_FAILED, ASSESSMENT_ACTIVATION_REQUEST, ASSESSMENT_ACTIVATION_RESET, ASSESSMENT_ACTIVATION_SUCCESS } from 'redux/action/types';
import { assessmentHttp } from 'api';

export const AssessmentActivation = (QS, JSONData?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: ASSESSMENT_ACTIVATION_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: ASSESSMENT_ACTIVATION_REQUEST,
        });
        try {
          const result = await assessmentHttp.activation(QS, JSONData);
          dispatch({
            type: ASSESSMENT_ACTIVATION_SUCCESS,
            payload: {
              result: result.data,
            },
          });
        } catch (error) {
          dispatch({
            type: ASSESSMENT_ACTIVATION_FAILED,
          });
        }
      };
  }
};
