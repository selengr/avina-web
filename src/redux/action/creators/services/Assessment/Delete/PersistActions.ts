import { ASSESSMENT_DELETE_FAILED, ASSESSMENT_DELETE_REQUEST, ASSESSMENT_DELETE_RESET, ASSESSMENT_DELETE_SUCCESS } from 'redux/action/types';
import { assessmentHttp } from 'api';

export const AssessmentDelete = (QS?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: ASSESSMENT_DELETE_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: ASSESSMENT_DELETE_REQUEST,
        });
        try {
          const result = await assessmentHttp.remove(QS);
          dispatch({
            type: ASSESSMENT_DELETE_SUCCESS,
            payload: {
              result: result.data,
            },
          });
        } catch (error) {
          dispatch({
            type: ASSESSMENT_DELETE_FAILED,
          });
        }
      };
  }
};
