import * as Types from 'redux/action/types';

const INITIAL_MHESAM_USERCREDITLIST = {
  data: '',
  loading: false,
  error: '',
};

export const MHesam_UserCreditList_Reducer = (state = INITIAL_MHESAM_USERCREDITLIST, action: any) => {
  switch (action.type) {
    case Types.MHESAM_USERCREDITLIST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.MHESAM_USERCREDITLIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.MHESAM_USERCREDITLIST_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    case Types.MHESAM_USERCREDITLIST_RESET: {
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
