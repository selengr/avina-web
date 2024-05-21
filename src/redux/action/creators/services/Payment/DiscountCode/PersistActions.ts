import { PAYMENT_DISCOUNTCODE_FAILED, PAYMENT_DISCOUNTCODE_REQUEST, PAYMENT_DISCOUNTCODE_SUCCESS } from 'redux/action/types';
import { paymentHttp } from 'api';

export const PaymentDicountCode = (couponCode, ownerId) => {
  return async (dispatch) => {
    dispatch({
      type: PAYMENT_DISCOUNTCODE_REQUEST,
    });
    try {
      const result = await paymentHttp.discountCode(ownerId, couponCode);
      dispatch({
        type: PAYMENT_DISCOUNTCODE_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (error) {
      dispatch({
        type: PAYMENT_DISCOUNTCODE_FAILED,
      });
    }
  };
};
