import http from 'api/config/PSYA/apiConfig';

export async function userList(data) {
  return http.GET('admin/users', { params: { ...data } });
}

export async function editUser(id, data) {
  return http.PUT(`admin/editUser/${id}`, data);
}

export async function showUser(id) {
  return http.GET(`admin/user/${id}`);
}

export async function showAssessmentList(data) {
  return http.GET('admin/assessments', { params: { ...data } });
}

export async function showAssessment(id) {
  return http.GET(`admin/assessment/${id}`);
}

export async function editAssessment(id, data) {
  return http.PUT(`admin/editAssessment/${id}`, data);
}

export async function showQuestionnaireList(data) {
  return http.GET('admin/questionnaires', { params: { ...data } });
}

export async function showQuestionnaire(id) {
  return http.GET(`admin/questionnaire/${id}`);
}

export async function editQuestionnaire(id, data) {
  return http.PUT(`admin/editQuestionnaire/${id}`, data);
}

export async function showOwnerList(data) {
  return http.GET('admin/owners', { params: { ...data } });
}

export async function showOwner(id) {
  return http.GET(`admin/owner/${id}`);
}

export async function editOwner(id, data) {
  return http.PUT(`admin/editOwner/${id}`, data);
}

export async function showAllOrders(data) {
  return http.GET('admin/allOrders', { params: { ...data } });
}

export async function showOrder(id) {
  return http.GET(`admin/showOrder/${id}`);
}

export async function createAssessment(data) {
  return http.POST('admin/createAssessment', data);
}

export async function commands(data) {
  return http.POST('admin/commands', data);
}

export async function updateServer(data) {
  return http.POST('admin/updateServer', data);
}

export async function allLogs(data) {
  return http.GET('admin/allLogs', { params: { ...data } });
}

export async function config() {
  return http.GET('admin/config');
}

export async function setConfig(data) {
  return http.POST('admin/config', data);
}

export async function loginActivities(data) {
  return http.GET('admin/loginActivities', { params: { ...data } });
}

export async function frontVersion(data) {
  return http.POST('admin/frontVersion', data);
}

export async function createOwner(data) {
  return http.POST('admin/owner', data);
}

export async function importExcel(data) {
  return http.POST('admin/importExcel', data);
}

//@Dev Announcement Apis Part
export async function showNotification() {
  return http.GET('admin/showAnnouncement');
}

export async function sendNotification(data) {
  return http.POST('admin/addAnnouncement', data);
}

export async function sendMultiNotifications(data) {
  return http.POST('admin/addMultiAnnouncements', data);
}
export async function seenNotification(data) {
  return http.PUT(`admin/seenAnnouncement/`, data);
}

export async function SendSMS(data) {
  return http.POST('admin/sms', data);
}

const exportedApi = {
  userList,
  editUser,
  showUser,
  showAssessmentList,
  showAssessment,
  editAssessment,
  showQuestionnaireList,
  showQuestionnaire,
  editQuestionnaire,
  showOwnerList,
  showOwner,
  editOwner,
  showAllOrders,
  showOrder,
  createAssessment,
  commands,
  setConfig,
  loginActivities,
  frontVersion,
  createOwner,
  updateServer,
  allLogs,
  config,
  importExcel,
  sendNotification,
  showNotification,
  sendMultiNotifications,
  seenNotification,
  SendSMS,
};

export default exportedApi;
