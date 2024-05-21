import * as Types from 'redux/action/types';

const INITIAL_ASSESSMENT_EDIT = {
  data: '',
  loading: false,
  error: '',
};

export const Assessment_Edit_Reducer = (state = INITIAL_ASSESSMENT_EDIT, action: any) => {
  switch (action.type) {
    case Types.ASSESSMENT_EDIT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.ASSESSMENT_EDIT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.ASSESSMENT_EDIT_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    case Types.ASSESSMENT_EDIT_RESET: {
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
