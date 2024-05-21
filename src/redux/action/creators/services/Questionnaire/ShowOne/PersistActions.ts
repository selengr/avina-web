import { QUESTIONNAIRE_SHOWONE_FAILED, QUESTIONNAIRE_SHOWONE_REQUEST, QUESTIONNAIRE_SHOWONE_SUCCESS } from 'redux/action/types';
import { questionnaireHttp } from 'api';

export const QuestionnaireShowOne = (QS?: any) => {
  return async (dispatch) => {
    dispatch({
      type: QUESTIONNAIRE_SHOWONE_REQUEST,
    });
    try {
      const result = await questionnaireHttp.getOneQuestionnaire(QS);
      dispatch({
        type: QUESTIONNAIRE_SHOWONE_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (error) {
      dispatch({
        type: QUESTIONNAIRE_SHOWONE_FAILED,
      });
    }
  };
};
