import * as Types from 'redux/action/types';

const INITIAL_LOGIN = {
  token: '',
  loading: false,
  error: '',
};
// const { state, message } = action.payload;

export const Auth_Login_Reducer = (state = INITIAL_LOGIN, action: any) => {
  switch (action.type) {
    case Types.AUTH_LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        token: action.payload.result,
      };
    }
    case Types.AUTH_LOGIN_FAILED: {
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
