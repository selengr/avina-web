import http from 'api/config/PSYA/apiConfig';

export async function userList(data) {
  return http.GET('user', { params: { ...data } });
}

export async function showOneUser(id, ownerId) {
  return http.GET(`user/${id}?owner_id=${ownerId}`);
}

export async function editUser(id, data) {
  return http.PUT(`user/${id}`, data);
}

export async function assignToAssessment(data) {
  return http.POST(`user/assign`, data);
}

export async function cancelUserAssign(data) {
  return http.POST('user/cancelAssign', data);
}

export async function removeUser(_data) {
  return http.DELETE('user', { data: _data });
}

export async function registerUser(data) {
  return http.POST('user', data);
}

export function addGroupUser(data) {
  return http.POST(`user/importExcel`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

const exportedApi = {
  userList,
  registerUser,
  editUser,
  removeUser,
  showOneUser,
  assignToAssessment,
  cancelUserAssign,
  addGroupUser,
};

export default exportedApi;
