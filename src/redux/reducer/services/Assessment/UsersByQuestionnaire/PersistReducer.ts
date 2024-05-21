import * as Types from 'redux/action/types';

const INITIAL_ASSESSMENT_USERSBYQUESTIONNAIRE = {
  data: '',
  loading: false,
  error: '',
};

export const Assessment_UsersByQuestionnaire_Reducer = (state = INITIAL_ASSESSMENT_USERSBYQUESTIONNAIRE, action: any) => {
  switch (action.type) {
    case Types.ASSESSMENT_USERSBYQUESTIONNAIRE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.ASSESSMENT_USERSBYQUESTIONNAIRE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.ASSESSMENT_USERSBYQUESTIONNAIRE_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    default:
      return state;
  }
};
