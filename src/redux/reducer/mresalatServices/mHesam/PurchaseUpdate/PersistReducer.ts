import * as Types from 'redux/action/types';

const INITIAL_MHESAM_PURCHASEUPDATE = {
  data: '',
  loading: false,
  error: '',
};

export const MHesam_PurchaseUpdate_Reducer = (state = INITIAL_MHESAM_PURCHASEUPDATE, action: any) => {
  switch (action.type) {
    case Types.MHESAM_PURCHASEUPDATE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.MHESAM_PURCHASEUPDATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.MHESAM_PURCHASEUPDATE_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    case Types.MHESAM_PURCHASEUPDATE_RESET: {
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
