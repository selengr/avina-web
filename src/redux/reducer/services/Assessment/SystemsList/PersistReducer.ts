import * as Types from 'redux/action/types';

const INITIAL_ASSESSMENT_SYSTEMSLIST = {
  data: '',
  loading: false,
  error: '',
};

export const Assessment_SystemsList_Reducer = (state = INITIAL_ASSESSMENT_SYSTEMSLIST, action: any) => {
  switch (action.type) {
    case Types.ASSESSMENT_SYSTEMSLIST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.ASSESSMENT_SYSTEMSLIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.ASSESSMENT_SYSTEMSLIST_FAILED: {
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
