import http from 'api/config/PSYA/apiConfig';

export async function getQuestionnairesList(data) {
  return http.GET(`questionnaire`, { params: { ...data } });
}

export async function getOneQuestionnaire(id) {
  return http.GET(`questionnaire/${id}`);
}

const exportedApi = {
  getQuestionnairesList,
  getOneQuestionnaire,
};

export default exportedApi;
