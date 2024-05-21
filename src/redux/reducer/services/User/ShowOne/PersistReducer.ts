import * as Types from 'redux/action/types';

const INITIAL_SHOWONE = {
  data: '',
  loading: false,
  error: '',
};
// const { state, message } = action.payload;

export const User_ShowOne_Reducer = (state = INITIAL_SHOWONE, action: any) => {
  switch (action.type) {
    case Types.USER_SHOWONE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.USER_SHOWONE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.USER_SHOWONE_FAILED: {
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
