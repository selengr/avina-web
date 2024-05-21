import http from 'api/config/MRESALAT/apiConfig';

export async function issueRequest(data) {
  return http.POST('mhesam/api/purchase/issue-request', data);
}

export async function userCreditList(data) {
  return http.GET('mhesam/bus/user-credit-list', { params: { ...data } });
}

export async function OTPSend(issueRequestId: number, nationalCode: number | string) {
  return http.POST('mhesam/api/purchase/otp-send', { issueRequestId: issueRequestId, nationalCode: nationalCode });
}

export async function purchaseUpdate(data) {
  return http.PUT(`mhesam/api/purchase/update`, data);
}

export async function cancelPerParcel(data) {
  return http.PUT(`mhesam/api/purchase/cancel-per-parcel`, data);
}

export async function purchase(data) {
  return http.PUT(`mhesam/api/purchase`, data);
}

const exportedApi = {
  issueRequest,
  userCreditList,
  OTPSend,
  cancelPerParcel,
  purchaseUpdate,
  purchase,
};

export default exportedApi;
