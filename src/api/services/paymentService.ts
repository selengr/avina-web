import http from 'api/config/PSYA/apiConfig';

export async function cancelOrder(data) {
  return http.POST('payment/cancelOrder', data);
}

export async function changeCount(data) {
  return http.POST('payment/changeCount', data);
}

export async function discountCode(ownerId, couponCode) {
  return http.POST(`payment/discountCode?owner_id=${ownerId}&discount_code=${couponCode}`);
}

export async function verify(data) {
  return http.POST('payment/verify', data);
}

export async function payWithBank(data) {
  return http.POST(`payment/pay`, data);
}

const exportedApi = {
  cancelOrder,
  changeCount,
  discountCode,
  verify,
  payWithBank,
};

export default exportedApi;
