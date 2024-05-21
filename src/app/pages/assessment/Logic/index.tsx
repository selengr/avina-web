import { Go, Service, Util } from 'utils';
import * as Types from 'redux/action/types';
import { messages } from '../messages';
import i18n from 'i18next';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { store } from 'redux/store/Store';
import * as Action from 'redux/action/creators';

const owner_id = Util.extractID();
let itemID = 0;
let userId = '';

export const getAssessmentList = async (state?) => {
  const data = {
    owner_id,
    name: state ? state.name : '',
    page: state ? state.pageNumber : 1,
    order: 'desc',
    per_page: 12,
  } as const;
  return await Service.Request(Types.ASSESSMENT_SHOWLIST_REQUEST, data);
};

export const getAssessmentUsers = (state?) => {
  const data = {
    owner_id,
    scope_name: state ? state.name : '',
    page: state ? state.pageNumber : 1,
    test_status: state ? state.status : '',
    assessment_id: qs.parse(location.search, { ignoreQueryPrefix: true }).id,
    order: 'desc',
  } as const;
  Service.Request(Types.ASSESSMENT_USERS_REQUEST, data);
};

export const cancelUserAssignment = async (state?) => {
  const data = {
    owner_id: owner_id,
    tests: userId,
  } as const;

  try {
    await Service.Request(Types.USER_CANCELASSIGN_REQUEST, data);
    if (userId.length === 1) {
      Service.Alert(true, 'success', `${i18n.t(messages.Alert_Global_Success_DeleteParticipant())}`, 'Done');
    } else {
      Service.Alert(true, 'success', `${i18n.t(messages.Alert_DeleteParticipants_Success())}`, 'Done');
    }
    await getAssessmentUsers(state);
    Service.Prompt('');
  } catch (error) {
    if (userId.length === 1) {
      Service.Alert(true, 'error', `${i18n.t(messages.Alert_DeleteParticipant_Error())}`, 'Alert');
    } else {
      Service.Alert(true, 'error', `${i18n.t(messages.Alert_DeleteParticipants_Error())}`, 'Alert');
    }
    Service.Prompt('');
  }
};

export const getUserList = async (userState) => {
  const data = {
    owner_id,
    name: userState ? userState.name : '',
    scope_name: userState ? userState.scope_name : '',
    page: userState ? userState.pageNumber : 1,
    sort_by: 'id',
    order: 'desc',
    per_page: 50,
  } as const;
  return await Service.Request(Types.USER_SHOWLIST_REQUEST, data);
};

export const userAssignAssessment = (id, selectedAssessment, reportType, selectedUsers, sendSMS, state) => {
  const data = {
    owner_id,
    assessment_id: selectedAssessment,
    result_visibility: reportType,
    users: selectedUsers,
    sendSMS: sendSMS,
    link: '',
  } as const;

  try {
    Service.Request(Types.USER_ASSIGN_REQUEST, data);
    // setSelectedUsers([]);
    getAssessment(id);
    getAssessmentUsers(state);
    Service.Alert(true, 'success', `${i18n.t(messages.Alert_GetAssessmentUser_Success())}`, 'Done');
    // await fetchAssessmentList();
  } catch (error) {
    Service.Alert(true, 'error', `${i18n.t(messages.Alert_GetAssessmentUser_Error())}`, 'Alert');
    // console.log('List error: ', error);
  }
};

export const assessmentOrder = async (quantity) => {
  const data = {
    owner_id,
    assessment_id: qs.parse(location.search, { ignoreQueryPrefix: true }).id,
    count: quantity,
  } as const;
  await Service.Request(Types.ASSESSMENT_ORDER_REQUEST, data);
};

export const changeAssessmentStatus = async (id, status) => {
  const data = {
    activation: status !== undefined && status === 1 ? 0 : 1,
  } as const;
  return await Service.Request(Types.ASSESSMENT_ACTIVATION_REQUEST, data, id);
};

export const removeDialog = (id?) => {
  Service.Prompt(`${i18n.t(messages.Input_Assessment_index_DeleteAssessment())}`);
  itemID = id;
};
export const removeItem = async () => {
  await Service.Request(Types.ASSESSMENT_DELETE_REQUEST, itemID);
  Service.Prompt('');
  // store.dispatch(Action.AssessmentDelete(undefined, 'reset') as any);
  // await getAssessmentList();
};

export const removeUserDialog = (id?) => {
  const msg = id.length === 1 ? `${i18n.t(messages.Dialog_Global_DeleteParticipant())}` : `${i18n.t(messages.Dialog_Global_DeleteParticipants())}`;
  Service.Prompt(msg);
  userId = id;
};

export const getAssessment = async (id) => {
  return await Service.Request(Types.ASSESSMENT_SHOWONE_REQUEST, id);
};

export const getQuestionnaires = async () => {
  await Service.Request(Types.QUESTIONNAIRE_SHOWLIST_REQUEST, '');
};

export const deleteAssessment = async (id) => {
  await Service.Request(Types.ASSESSMENT_DELETE_REQUEST, id);
  await getAssessment(id);
  Go.Back();
};

export const editAssessment = async (data, qs) => {
  await Service.Request(Types.ASSESSMENT_EDIT_REQUEST, data, qs);
  Go.Back();
};

export function assessments() {
  return useSelector<any>((res) => res.assessmentShowList);
}

export function assessmentsStatus() {
  return useSelector<any>((res) => res.assessmentActivation);
}

export function assessmentsUsersInfo() {
  return useSelector<any>((res) => res.assessmentUserList);
}

export { getAssessmentList as refreshAssessmentList };
export { getAssessmentUsers as refreshAssessmentUsersList };
