import * as Types from 'redux/action/types';

const INITIAL_ASSESSMENT_PACKAGES = {
  data: '',
  loading: false,
  error: '',
};

export const Assessment_Packages_Reducer = (state = INITIAL_ASSESSMENT_PACKAGES, action: any) => {
  switch (action.type) {
    case Types.ASSESSMENT_PACKAGES_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.ASSESSMENT_PACKAGES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.ASSESSMENT_PACKAGES_FAILED: {
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
