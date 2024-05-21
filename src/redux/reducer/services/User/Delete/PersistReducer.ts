import * as Types from 'redux/action/types';

const INITIAL_DELETE = {
  data: '',
  loading: false,
  error: '',
};
export const User_Delete_Reducer = (state = INITIAL_DELETE, action: any) => {
  switch (action.type) {
    case Types.USER_DELETE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.USER_DELETE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.USER_DELETE_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    case Types.USER_DELETE_RESET: {
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
