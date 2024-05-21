import { ASSESSMENT_SHOWONEPACKAGE_FAILED, ASSESSMENT_SHOWONEPACKAGE_REQUEST, ASSESSMENT_SHOWONEPACKAGE_SUCCESS } from 'redux/action/types';
import { assessmentHttp } from 'api';

export const AssessmentShowOnePackage = (QS?: any) => {
  return async (dispatch) => {
    dispatch({
      type: ASSESSMENT_SHOWONEPACKAGE_REQUEST,
    });
    try {
      const result = await assessmentHttp.getPackageInfo(QS);
      dispatch({
        type: ASSESSMENT_SHOWONEPACKAGE_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (error) {
      dispatch({
        type: ASSESSMENT_SHOWONEPACKAGE_FAILED,
      });
    }
  };
};
