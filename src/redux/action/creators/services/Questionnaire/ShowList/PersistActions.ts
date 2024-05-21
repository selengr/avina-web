import { QUESTIONNAIRE_SHOWLIST_FAILED, QUESTIONNAIRE_SHOWLIST_REQUEST, QUESTIONNAIRE_SHOWLIST_SUCCESS } from 'redux/action/types';
import { questionnaireHttp } from 'api';

export const QuestionnaireShowList = (JSONData?: any) => {
  return async (dispatch) => {
    dispatch({
      type: QUESTIONNAIRE_SHOWLIST_REQUEST,
    });
    try {
      const result = await questionnaireHttp.getQuestionnairesList(JSONData);
      dispatch({
        type: QUESTIONNAIRE_SHOWLIST_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (error) {
      dispatch({
        type: QUESTIONNAIRE_SHOWLIST_FAILED,
      });
    }
  };
};
