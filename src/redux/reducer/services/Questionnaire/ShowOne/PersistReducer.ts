import * as Types from 'redux/action/types';

const INITIAL_QUESTIONNAIRE_SHOWONE = {
  data: '',
  loading: false,
  error: '',
};

export const Questionnaire_ShowOne_Reducer = (state = INITIAL_QUESTIONNAIRE_SHOWONE, action: any) => {
  switch (action.type) {
    case Types.QUESTIONNAIRE_SHOWONE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.QUESTIONNAIRE_SHOWONE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.QUESTIONNAIRE_SHOWONE_FAILED: {
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
