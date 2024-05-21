import { ASSESSMENT_USERSBYQUESTIONNAIRE_FAILED, ASSESSMENT_USERSBYQUESTIONNAIRE_REQUEST, ASSESSMENT_USERSBYQUESTIONNAIRE_SUCCESS } from 'redux/action/types';
import { assessmentHttp } from 'api';

export const UsersByQuestionnaire = (JSONData?: any) => {
  return async (dispatch) => {
    dispatch({
      type: ASSESSMENT_USERSBYQUESTIONNAIRE_REQUEST,
    });
    try {
      const result = await assessmentHttp.usersByQuestionnaire(JSONData);
      dispatch({
        type: ASSESSMENT_USERSBYQUESTIONNAIRE_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (error) {
      dispatch({
        type: ASSESSMENT_USERSBYQUESTIONNAIRE_FAILED,
      });
    }
  };
};
