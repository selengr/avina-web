import { ASSESSMENT_SHOWLIST_FAILED, ASSESSMENT_SHOWLIST_REQUEST, ASSESSMENT_SHOWLIST_SUCCESS } from 'redux/action/types';
import { assessmentHttp } from 'api';

export const AssessmentShowList = (JSONData?: any) => {
  return async (dispatch) => {
    dispatch({
      type: ASSESSMENT_SHOWLIST_REQUEST,
    });
    try {
      const result = await assessmentHttp.showAssessmentList(JSONData);
      dispatch({
        type: ASSESSMENT_SHOWLIST_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (error) {
      dispatch({
        type: ASSESSMENT_SHOWLIST_FAILED,
      });
    }
  };
};
