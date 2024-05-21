import * as Types from 'redux/action/types';

const INITIAL_ASSESSMENT_SHOWONE = {
  data: '',
  loading: false,
  error: '',
};

export const Assessment_ShowOne_Reducer = (state = INITIAL_ASSESSMENT_SHOWONE, action: any) => {
  switch (action.type) {
    case Types.ASSESSMENT_SHOWONE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.ASSESSMENT_SHOWONE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.ASSESSMENT_SHOWONE_FAILED: {
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
