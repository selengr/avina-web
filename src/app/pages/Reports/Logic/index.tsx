import { Service, Util } from 'utils';
import * as Types from 'redux/action/types';

const owner_id = Util.extractID();

export const assessmentShowOne = async (id) => {
  return await Service.Request(Types.ASSESSMENT_SHOWONE_REQUEST, id);
};

export const testResult = async (checkedUsers, selectedQuestionnaire, type, selectedAssessment, isSelectedAll) => {
  const data = {
    tests: checkedUsers,
    questionnaires_id: [selectedQuestionnaire],
    owner_id: owner_id,
    result_type: type,
    assessment_id: selectedAssessment,
    select_all: isSelectedAll,
  } as const;
  return await Service.Request(Types.TEST_RESULT_REQUEST, data);
};

export const getAssessmentList = async (state?) => {
  const data = {
    owner_id,
    name: state ? state.name : '',
    page: state ? state.pageNumber : 1,
    sort_by: 'id',
    order: 'desc',
    per_page: 9,
  } as const;
  return await Service.Request(Types.ASSESSMENT_SHOWLIST_REQUEST, data);
};

export const getQuestionnaireUser = async (selectedAssessment, selectedQuestionnaire, state) => {
  const data = {
    owner_id,
    assessment_id: selectedAssessment,
    questionnaire_id: selectedQuestionnaire,
    page: state ? state.pageNumber : 1,
    per_page: 10,
  } as const;
  if (selectedQuestionnaire) await Service.Request(Types.ASSESSMENT_USERSBYQUESTIONNAIRE_REQUEST, data);
};
