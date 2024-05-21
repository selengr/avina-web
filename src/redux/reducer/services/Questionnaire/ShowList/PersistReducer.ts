import * as Types from 'redux/action/types';

const INITIAL_QUESTIONNAIRE_SHOWLIST = {
  data: '',
  loading: false,
  error: '',
};

export const Questionnaire_ShowList_Reducer = (state = INITIAL_QUESTIONNAIRE_SHOWLIST, action: any) => {
  switch (action.type) {
    case Types.QUESTIONNAIRE_SHOWLIST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.QUESTIONNAIRE_SHOWLIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.QUESTIONNAIRE_SHOWLIST_FAILED: {
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
