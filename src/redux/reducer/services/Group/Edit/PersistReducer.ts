import * as Types from '../../../../action/types';

const INITIAL_EDIT = {
  data: '',
  loading: false,
  error: '',
};

export const Group_Edit_Reducer = (state = INITIAL_EDIT, action: any) => {
  switch (action.type) {
    case Types.GROUP_EDIT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.GROUP_EDIT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.GROUP_EDIT_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    case Types.GROUP_EDIT_RESET: {
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
