import * as Types from 'redux/action/types';

const INITIAL_MHESAM_OTPSend = {
  data: '',
  loading: false,
  error: '',
};

export const MHesam_OTPSend_Reducer = (state = INITIAL_MHESAM_OTPSend, action: any) => {
  switch (action.type) {
    case Types.MHESAM_OTPSEND_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.MHESAM_OTPSEND_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.MHESAM_OTPSEND_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    case Types.MHESAM_OTPSEND_RESET: {
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
