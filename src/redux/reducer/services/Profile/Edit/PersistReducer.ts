import * as Types from 'redux/action/types';

const INITIAL_EDIT = {
  data: '',
  loading: false,
  error: '',
};

export const ProfileEdit_Reducer = (state = INITIAL_EDIT, action: any) => {
  switch (action.type) {
    case Types.PROFILE_EDIT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.PROFILE_EDIT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.PROFILE_EDIT_FAILED: {
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
