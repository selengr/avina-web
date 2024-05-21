import * as Types from 'redux/action/types';

const INITIAL_ADDGROUP = {
  data: '',
  loading: false,
  error: '',
};

export const User_AddGroup_Reducer = (state = INITIAL_ADDGROUP, action: any) => {
  switch (action.type) {
    case Types.USER_ADDGROUP_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.USER_ADDGROUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.USER_ADDGROUP_FAILED: {
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
