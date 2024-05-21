import * as Types from 'redux/action/types';

const INITIAL_ASSESSMENT_STORE = {
  data: '',
  loading: false,
  error: '',
};

export const Assessment_Store_Reducer = (state = INITIAL_ASSESSMENT_STORE, action: any) => {
  switch (action.type) {
    case Types.ASSESSMENT_STORE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.ASSESSMENT_STORE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.ASSESSMENT_STORE_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    case Types.ASSESSMENT_STORE_RESET: {
      return {
        ...state,
        loading: false,
        error: 'reset',
        data: '',
      };
    }
    default:
      return state;
  }
};
