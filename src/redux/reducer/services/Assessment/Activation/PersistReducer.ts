import * as Types from 'redux/action/types';

const INITIAL_ASSESSMENT_ACTIVATION = {
  data: '',
  loading: false,
  error: '',
};

export const Assessment_Activation_Reducer = (state = INITIAL_ASSESSMENT_ACTIVATION, action: any) => {
  switch (action.type) {
    case Types.ASSESSMENT_ACTIVATION_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.ASSESSMENT_ACTIVATION_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.ASSESSMENT_ACTIVATION_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    case Types.ASSESSMENT_ACTIVATION_RESET: {
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
