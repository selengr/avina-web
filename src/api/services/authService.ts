import http from 'api/config/PSYA/apiConfig';

export async function enterPhone(data) {
  return http.POST('auth/enterPhone', data);
}

export async function enterCode(data) {
  return http.POST('auth/enterCode', data);
}

export async function login(data) {
  return http.POST('auth/login', data);
}

export async function logout(data) {
  return http.POST('auth/logout', data);
}

export async function resetPassword(data) {
  return http.POST('auth/resetPassword', data);
}

export async function forgetPassword(data) {
  return http.POST('auth/forGETPassword', data);
}

export async function ssoMresalat() {
  return http.GET('auth/login/sso/mresalat');
}

export async function me() {
  return http.GET('auth/me');
}

const exportedApi = {
  enterPhone,
  enterCode,
  login,
  logout,
  resetPassword,
  forgetPassword,
  me,
  ssoMresalat,
};

export default exportedApi;
