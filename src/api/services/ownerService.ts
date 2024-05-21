import http from 'api/config/PSYA/apiConfig';

export async function registerOwner(data) {
  return http.POST(`owner/register`, data);
}

export async function showList() {
  return http.GET('owner');
}

const exportedApi = {
  registerOwner,
  showList,
};

export default exportedApi;
