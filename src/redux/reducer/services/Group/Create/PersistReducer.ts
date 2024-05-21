import * as Types from 'redux/action/types';

const INITIAL_CREATE = {
  data: '',
  loading: false,
  error: '',
};

export const Group_Create_Reducer = (state = INITIAL_CREATE, action: any) => {
  switch (action.type) {
    case Types.GROUP_CREATE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.GROUP_CREATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.GROUP_CREATE_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    case Types.GROUP_CREATE_RESET: {
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
