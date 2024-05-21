import * as Types from 'redux/action/types';

const INITIAL_ASSESSMENT_SHOWONEPACKAGE = {
  data: '',
  loading: false,
  error: '',
};

export const Assessment_ShowOnePackage_Reducer = (state = INITIAL_ASSESSMENT_SHOWONEPACKAGE, action: any) => {
  switch (action.type) {
    case Types.ASSESSMENT_SHOWONEPACKAGE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.ASSESSMENT_SHOWONEPACKAGE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.ASSESSMENT_SHOWONEPACKAGE_FAILED: {
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
