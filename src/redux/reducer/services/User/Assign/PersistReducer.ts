import * as Types from 'redux/action/types';

const INITIAL_ASSIGN = {
  data: '',
  loading: false,
  error: '',
};

export const User_Assign_Reducer = (state = INITIAL_ASSIGN, action: any) => {
  switch (action.type) {
    case Types.USER_ASSIGN_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.USER_ASSIGN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.USER_ASSIGN_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    case Types.USER_ASSIGN_RESET: {
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
