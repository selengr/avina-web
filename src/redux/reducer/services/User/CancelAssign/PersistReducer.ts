import * as Types from 'redux/action/types';

const INITIAL_USER_CANCELASSIGN = {
  data: '',
  loading: false,
  error: '',
};

export const User_CancelAssign_Reducer = (state = INITIAL_USER_CANCELASSIGN, action: any) => {
  switch (action.type) {
    case Types.USER_CANCELASSIGN_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.USER_CANCELASSIGN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.USER_CANCELASSIGN_FAILED: {
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
