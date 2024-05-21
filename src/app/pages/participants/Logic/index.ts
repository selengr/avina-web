import { Service, Util } from 'utils';
import * as Types from 'redux/action/types';
import qs from 'qs';
import { useSelector } from 'react-redux';
import i18n from 'i18next';
import { messages } from '../../assessment/messages';
import { store } from 'redux/store/Store';
import * as Action from 'redux/action/creators';

const owner_id = Util.extractID();
export const getUserList = async (state?) => {
  console.log(state);
  const data = {
    owner_id,
    group_id: state && state.group,
    sex: state && state.sex,
    name: state && state.name,
    scope_name: state && state.scope_name,
    sort_by: 'id',
    order: 'desc',
    page: state ? state.pageNumber : 1,
    per_page: 10,
  } as const;
  return await Service.Request(Types.USER_SHOWLIST_REQUEST, data);
};

export const getAssessmentList = async (state?) => {
  const data = {
    owner_id,
    name: state ? state.name : '',
    page: state ? state.pageNumber : 1,
    order: 'asc',
    per_page: 50,
  } as const;
  return await Service.Request(Types.ASSESSMENT_SHOWLIST_REQUEST, data);
};

export const assignToAssessment = async (selectedAssessment: any, reportType: number, checkedUsers: any, sendSMS: boolean) => {
  const data = {
    owner_id,
    assessment_id: selectedAssessment,
    result_visibility: reportType,
    users: checkedUsers,
    sendSMS: sendSMS,
    link: '',
  } as const;
  return await Service.Request(Types.USER_ASSIGN_REQUEST, data);
};

// @Dev From here Form Logic Starts

export const groupShowList = () => {
  const data = {
    owner_id,
  } as const;
  Service.Request(Types.GROUP_SHOWLIST_REQUEST, data);
};

export const removeItem = async (id) => {
  const data = {
    owner_id,
    users: [id],
  } as const;
  await Service.Request(Types.USER_DELETE_REQUEST, data);
  store.dispatch(Action.UserDelete(undefined, 'reset') as any);
  await getUserList();
};

// @Dev From here Form Logic Starts

export const userShowOne = async (id) => {
  return await Service.Request(Types.USER_SHOWONE_REQUEST, id, owner_id);
};

export function userInfo() {
  return useSelector<any>((res) => res.userShowOne);
}

export const userEdit = async (id, data) => {
  await Service.Request(Types.USER_EDIT_REQUEST, data, qs.parse(location.search, { ignoreQueryPrefix: true }).id);
};

export const userAddGroup = async (data) => {
  await Service.Request(Types.USER_ADDGROUP_REQUEST, data);
};

export const userRegister = async (data) => {
  await Service.Request(Types.USER_REGISTER_REQUEST, data);
};

export const removeDialog = () => {
  Service.Prompt(`${i18n.t(messages.Dialog_Global_DeleteParticipant())}`);
};

export { getUserList as refreshUserList, getAssessmentList as refreshAssessmentList };
