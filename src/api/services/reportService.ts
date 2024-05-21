import http from 'api/config/PSYA/apiConfig';

export async function reportList(data) {
  return http.GET('assessment/users', {
    params: { ...data },
  });
}

const exportedApi = {
  reportList,
};

export default exportedApi;
