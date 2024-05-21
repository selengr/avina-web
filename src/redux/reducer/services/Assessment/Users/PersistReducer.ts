import * as Types from 'redux/action/types';

const INITIAL_ASSESSMENT_USERS = {
  data: '',
  loading: false,
  error: '',
};

export const Assessment_Users_Reducer = (state = INITIAL_ASSESSMENT_USERS, action: any) => {
  switch (action.type) {
    case Types.ASSESSMENT_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.ASSESSMENT_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.ASSESSMENT_USERS_FAILED: {
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
