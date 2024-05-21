import http from 'api/config/PSYA/apiConfig';

const qs = require('qs');

export async function edit(id, data) {
  return http.PUT(`assessment/${id}`, data);
}

export async function store(data) {
  return http.POST('assessment', data);
}

export async function getSystemsAssessment(data) {
  return http.GET(`assessment/systemsAssessmentsList`, { params: { ...data } });
}

export async function showAssessmentList(data?) {
  return http.GET('assessment', { params: { ...data } });
}

export async function remove(id) {
  return http.DELETE(`assessment/${id}`);
}

export async function activation(id, data) {
  return http.PUT(`assessment/activation/${id}`, data);
}

export async function showOneAssessment(id) {
  return http.GET(`assessment/${id}`);
}

export async function assessmentUsers(data) {
  return http.GET(`assessment/users`, { params: { ...data } });
}

export async function finishedUsers(ownerId, assessmentId, minDate, maxDate, order, page, perPage, groups, sort) {
  return http.GET(
    `assessment/finishedUsers?owner_id=${ownerId}&assessment_id=${assessmentId}&min_date=${minDate}&max_date=${maxDate}&sex&sort_by=${sort}&order=${order}&page=${page}&per_page=${perPage}&groups[0]=${groups}`,
  );
}

export async function addToAssessments(data) {
  return http.POST('assessment/addToMyAssessments', data);
}

export async function orderAssessment(data) {
  return http.POST('assessment/order', data);
}

export async function getPackages(data) {
  return http.GET(`assessment/packages`, { params: { ...data } });
}

export async function getPackageInfo(id) {
  return http.GET(`assessment/showOnePackage/${id}`);
}

export async function usersByQuestionnaire(data) {
  return http.GET('assessment/usersByQuestionnaire', {
    params: { ...data },
  });
}

const exportedApi = {
  edit,
  store,
  getSystemsAssessment,
  showAssessmentList,
  remove,
  activation,
  showOneAssessment,
  assessmentUsers,
  addToAssessments,
  finishedUsers,
  orderAssessment,
  getPackages,
  getPackageInfo,
  usersByQuestionnaire,
};

export default exportedApi;
