import * as Types from '../../../../action/types';

const INITIAL_EDIT = {
  data: '',
  loading: false,
  error: '',
};
// const { state, message } = action.payload;

export const UserEdit_Reducer = (state = INITIAL_EDIT, action: any) => {
  switch (action.type) {
    case Types.USER_EDIT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.USER_EDIT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.USER_EDIT_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    case Types.USER_EDIT_RESET: {
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
