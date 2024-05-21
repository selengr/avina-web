import * as Types from 'redux/action/types';

const INITIAL_ENTERPHONE = {
  path: '',
  loading: false,
  error: '',
};
// const { state, message } = action.payload;

export const SSO_LOGIN_Reducer = (state = INITIAL_ENTERPHONE, action: any) => {
  switch (action.type) {
    case Types.SSO_LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.SSO_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        path: action.payload.result,
      };
    }
    case Types.SSO_LOGIN_FAILED: {
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
