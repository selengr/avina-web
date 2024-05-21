import { ASSESSMENT_PACKAGES_FAILED, ASSESSMENT_PACKAGES_REQUEST, ASSESSMENT_PACKAGES_SUCCESS } from 'redux/action/types';
import { assessmentHttp } from 'api';

export const AssessmentPackages = (JSONData?: any) => {
  return async (dispatch) => {
    dispatch({
      type: ASSESSMENT_PACKAGES_REQUEST,
    });
    try {
      const result = await assessmentHttp.getPackages(JSONData);
      dispatch({
        type: ASSESSMENT_PACKAGES_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (error) {
      dispatch({
        type: ASSESSMENT_PACKAGES_FAILED,
      });
    }
  };
};
