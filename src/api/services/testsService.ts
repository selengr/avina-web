import http from 'api/config/PSYA/apiConfig';

export async function showReport(data) {
  return http.POST(`test/result`, data);
}

export async function getQuestions(t_id, q_id) {
  return http.GET(`test/showQuestions/?test_id=${t_id}&questionnaire_id=${q_id}`);
}

export async function getTaskItem(t_id, q_id) {
  return http.GET(`task/showQuestions/?test_id=${t_id}&questionnaire_id=${q_id}`);
}

export async function submitTestAnswer(data) {
  return http.POST(`test/answers`, data);
}

export async function submitTaskAnswer(data) {
  return http.POST(`task/answers`, data);
}

export async function userTest(ownerId) {
  return http.GET(`test/userTests?owner_id=${ownerId}`);
}

export async function getTestInfo(id) {
  return http.GET(`test/showOne/${id}`);
}

const exportedApi = {
  userTest,
  getTestInfo,
  showReport,
  submitTestAnswer,
  submitTaskAnswer,
  getQuestions,
  getTaskItem,
};

export default exportedApi;
