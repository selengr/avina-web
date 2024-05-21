import * as Types from 'redux/action/types';

const INITIAL_ENTERCODE = {
  token: '',
  loading: false,
  error: '',
};
// const { state, message } = action.payload;

export const Auth_EnterCode_Reducer = (state = INITIAL_ENTERCODE, action: any) => {
  switch (action.type) {
    case Types.AUTH_ENTERCODE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.AUTH_ENTERCODE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        token: action.payload.result,
      };
    }
    case Types.AUTH_ENTERCODE_FAILED: {
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
