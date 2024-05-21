import { ASSESSMENT_USERS_FAILED, ASSESSMENT_USERS_REQUEST, ASSESSMENT_USERS_SUCCESS } from 'redux/action/types';
import { assessmentHttp } from 'api';

export const AssessmentUsers = (JSONData?: any) => {
  return async (dispatch) => {
    dispatch({
      type: ASSESSMENT_USERS_REQUEST,
    });
    try {
      const result = await assessmentHttp.assessmentUsers(JSONData);
      dispatch({
        type: ASSESSMENT_USERS_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (error) {
      dispatch({
        type: ASSESSMENT_USERS_FAILED,
      });
    }
  };
};
