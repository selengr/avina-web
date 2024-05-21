import * as Types from 'redux/action/types';

const INITIAL_TEST_RESULT = {
  data: '',
  loading: false,
  error: '',
};

export const Test_Result_Reducer = (state = INITIAL_TEST_RESULT, action: any) => {
  switch (action.type) {
    case Types.TEST_RESULT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.TEST_RESULT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.TEST_RESULT_FAILED: {
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
