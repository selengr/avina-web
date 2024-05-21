import * as Types from 'redux/action/types';

const INITIAL_ENTERCODE = {
  token: '',
  loading: false,
  error: '',
};
// const { state, message } = action.payload;

export const Payment_DiscountCode_Reducer = (state = INITIAL_ENTERCODE, action: any) => {
  switch (action.type) {
    case Types.PAYMENT_DISCOUNTCODE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.PAYMENT_DISCOUNTCODE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        token: action.payload.result,
      };
    }
    case Types.PAYMENT_DISCOUNTCODE_FAILED: {
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
