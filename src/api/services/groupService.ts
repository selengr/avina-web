import http from 'api/config/PSYA/apiConfig';

export async function create(data) {
  return http.POST('group/', data);
}

export async function edit(id, data) {
  return http.PUT(`group/${id}`, data);
}

export async function remove(_data) {
  return http.DELETE('group', { data: _data });
}

export async function groupList(data) {
  return http.GET('group', { params: { ...data } });
}

export async function showOneGroup(ownerId, id) {
  return http.GET(`group/${id}?owner_id=${ownerId}`);
}

export async function addUser(data) {
  return http.POST('group/addUsers', data);
}

export async function removeUser(_data) {
  return http.DELETE('group/users', { data: _data });
}

const exportedApi = {
  groupList,
  showOneGroup,
  create,
  edit,
  remove,
  addUser,
  removeUser,
};

export default exportedApi;
