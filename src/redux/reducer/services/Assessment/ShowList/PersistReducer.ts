import * as Types from 'redux/action/types';

const INITIAL_ASSESSMENT_SHOWLIST = {
  data: '',
  loading: false,
  error: '',
};

export const Assessment_ShowList_Reducer = (state = INITIAL_ASSESSMENT_SHOWLIST, action: any) => {
  switch (action.type) {
    case Types.ASSESSMENT_SHOWLIST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.ASSESSMENT_SHOWLIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.ASSESSMENT_SHOWLIST_FAILED: {
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
