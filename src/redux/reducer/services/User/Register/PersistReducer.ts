import * as Types from 'redux/action/types';

const INITIAL_REGISTER = {
  data: '',
  loading: false,
  error: '',
};

export const User_Register_Reducer = (state = INITIAL_REGISTER, action: any) => {
  switch (action.type) {
    case Types.USER_REGISTER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.USER_REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.USER_REGISTER_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    case Types.USER_REGISTER_RESET: {
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
