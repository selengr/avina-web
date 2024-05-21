import * as Types from 'redux/action/types';

const INITIAL_SHOWLIST = {
  data: '',
  loading: false,
  error: '',
};
// const { state, message } = action.payload;

export const User_ShowList_Reducer = (state = INITIAL_SHOWLIST, action: any) => {
  switch (action.type) {
    case Types.USER_SHOWLIST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.USER_SHOWLIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.USER_SHOWLIST_FAILED: {
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

export const AllUsers_ShowList_Reducer = (state = INITIAL_SHOWLIST, action: any) => {
  switch (action.type) {
    case Types.ALLUSERS_SHOWLIST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.ALLUSERS_SHOWLIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.ALLUSERS_SHOWLIST_FAILED: {
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
