import { ASSESSMENT_SYSTEMSLIST_FAILED, ASSESSMENT_SYSTEMSLIST_REQUEST, ASSESSMENT_SYSTEMSLIST_RESET, ASSESSMENT_SYSTEMSLIST_SUCCESS } from 'redux/action/types';
import { assessmentHttp } from 'api';

export const AssessmentSystemsList = (JSONData?: any, type?: 'reset' | 'request') => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: ASSESSMENT_SYSTEMSLIST_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: ASSESSMENT_SYSTEMSLIST_REQUEST,
        });
        try {
          const result = await assessmentHttp.getSystemsAssessment(JSONData);
          dispatch({
            type: ASSESSMENT_SYSTEMSLIST_SUCCESS,
            payload: {
              result: result.data,
            },
          });
        } catch (error) {
          dispatch({
            type: ASSESSMENT_SYSTEMSLIST_FAILED,
          });
        }
      };
  }
};
