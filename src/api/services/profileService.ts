import http from 'api/config/PSYA/apiConfig';

export async function updateProfileInfo(data) {
  return http.POST('profile/editUser', data);
}

export async function setLastRole(data) {
  return http.POST(`profile/setLastRole`, data);
}

export async function ordersList(owner_id) {
  return http.GET(`profile/ordersList?owner_id=${owner_id}&per_page=50`);
}

export async function paymentHistory(owner_id) {
  return http.GET(`profile/paymentHistory?owner_id=${owner_id}&per_page=50`);
}

export async function shoppingCart(ownerId) {
  return http.GET(`payment/shoppingCart?owner_id=${ownerId}`);
}

export async function dashboard(limit) {
  return http.GET(`profile/dashboard?limit=${limit}`);
}

const exportedApi = {
  updateProfileInfo,
  setLastRole,
  ordersList,
  paymentHistory,
  shoppingCart,
  dashboard,
};

export default exportedApi;
