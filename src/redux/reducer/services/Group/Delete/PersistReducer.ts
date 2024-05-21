import * as Types from 'redux/action/types';

const INITIAL_DELETE = {
  data: '',
  loading: false,
  error: '',
};
export const Group_Delete_Reducer = (state = INITIAL_DELETE, action: any) => {
  switch (action.type) {
    case Types.GROUP_DELETE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.GROUP_DELETE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.GROUP_DELETE_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    case Types.GROUP_DELETE_RESET: {
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
