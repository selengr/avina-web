import http from 'api/config/PSYA/apiConfig';

export async function update() {
  return http.GET('admin/update_DB');
}

const exportedApi = { update };

export default exportedApi;
