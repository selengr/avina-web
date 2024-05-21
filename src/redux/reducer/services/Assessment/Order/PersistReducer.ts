import * as Types from 'redux/action/types';

const INITIAL_ASSESSMENT_ORDER = {
  data: '',
  loading: false,
  error: '',
};

export const Assessment_Order_Reducer = (state = INITIAL_ASSESSMENT_ORDER, action: any) => {
  switch (action.type) {
    case Types.ASSESSMENT_ORDER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.ASSESSMENT_ORDER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.ASSESSMENT_ORDER_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    case Types.ASSESSMENT_ORDER_RESET: {
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
