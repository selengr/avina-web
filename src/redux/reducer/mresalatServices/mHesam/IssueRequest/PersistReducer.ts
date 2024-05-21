import * as Types from 'redux/action/types';

const INITIAL_MHESAM_ISSUEREQUEST = {
  data: '',
  loading: false,
  error: '',
};

export const MHesam_IssueRequest_Reducer = (state = INITIAL_MHESAM_ISSUEREQUEST, action: any) => {
  switch (action.type) {
    case Types.MHESAM_ISSUEREQUEST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.MHESAM_ISSUEREQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.MHESAM_ISSUEREQUEST_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    case Types.MHESAM_ISSUEREQUEST_RESET: {
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
