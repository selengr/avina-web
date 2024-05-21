import { ASSESSMENT_SHOWONE_FAILED, ASSESSMENT_SHOWONE_REQUEST, ASSESSMENT_SHOWONE_SUCCESS } from 'redux/action/types';
import { assessmentHttp } from 'api';

export const AssessmentShowOne = (QS?: any) => {
  return async (dispatch) => {
    dispatch({
      type: ASSESSMENT_SHOWONE_REQUEST,
    });
    try {
      const result = await assessmentHttp.showOneAssessment(QS);
      dispatch({
        type: ASSESSMENT_SHOWONE_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (error) {
      dispatch({
        type: ASSESSMENT_SHOWONE_FAILED,
      });
    }
  };
};
