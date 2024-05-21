import * as Types from 'redux/action/types';

const INITIAL_ENTERPHONE = {
  path: '',
  loading: false,
  error: '',
};
// const { state, message } = action.payload;

export const Auth_EnterPhone_Reducer = (state = INITIAL_ENTERPHONE, action: any) => {
  switch (action.type) {
    case Types.AUTH_ENTERPHONE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.AUTH_ENTERPHONE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        path: action.payload.result,
      };
    }
    case Types.AUTH_ENTERPHONE_FAILED: {
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
