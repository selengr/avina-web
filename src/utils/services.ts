import { store } from 'redux/store/Store';
import * as Action from 'redux/action/creators';
import { setAlert } from 'redux/action/creators';
import * as Types from 'redux/action/types';
import { adminHttp, assessmentHttp, mHesamHttp, userHttp } from '../api';
export const Prompt = (message) => {
  store.dispatch(Action.setPrompt(!!message, message) as any);
};
export const Alert = (open, severity, message, icon) => {
  store.dispatch(setAlert(open, severity, message, icon) as any);
};

export const Request = async (type: string, data?: any, id?) => {
  switch (type) {
    case Types.ASSESSMENT_SHOWLIST_REQUEST: {
      return getAssessmentList(data);
    }
    case Types.ASSESSMENT_DELETE_REQUEST: {
      return deleteAssessment(data);
    }
    case Types.ASSESSMENT_ACTIVATION_REQUEST: {
      return changeAssessmentStatus(id, data);
    }
    case Types.ASSESSMENT_SHOWONE_REQUEST: {
      return getAssessment(data);
    }
    case Types.ASSESSMENT_USERS_REQUEST: {
      return getAssessmentUsers(data);
    }
    case Types.ASSESSMENT_ORDER_REQUEST: {
      return assessmentOrder(data);
    }
    case Types.ASSESSMENT_EDIT_REQUEST: {
      return assessmentEdit(id, data);
    }
    case Types.ASSESSMENT_STORE_REQUEST: {
      return assessmentStore(data);
    }
    case Types.ASSESSMENT_USERSBYQUESTIONNAIRE_REQUEST: {
      return getQuestionnaireUsers(data);
    }
    case Types.USER_SHOWLIST_REQUEST: {
      return getUserList(data);
    }
    case Types.USER_SHOWONE_REQUEST: {
      return getUserInfo(data, id);
    }
    case Types.ALLUSERS_SHOWLIST_REQUEST: {
      return getAllUsers(data);
    }
    case Types.USER_CANCELASSIGN_REQUEST: {
      return cancelUserAssignment(data);
    }
    case Types.GROUP_SHOWLIST_REQUEST: {
      return getGroupList(data);
    }
    case Types.GROUP_SHOWONE_REQUEST: {
      return GroupInfo(data, id);
    }
    case Types.GROUP_DELETE_REQUEST: {
      return deleteGroup(data);
    }
    case Types.USER_ASSIGN_REQUEST: {
      return userAssignAssessment(data);
    }
    case Types.QUESTIONNAIRE_SHOWLIST_REQUEST: {
      return getQuestionnaires(data);
    }
    case Types.GROUP_CREATE_REQUEST: {
      return GroupCreate(data);
    }
    case Types.GROUP_EDIT_REQUEST: {
      return GroupEdit(id, data);
    }
    case Types.USER_REGISTER_REQUEST: {
      return userRegister(data);
    }
    case Types.USER_EDIT_REQUEST: {
      return userEdit(id, data);
    }
    case Types.USER_ADDGROUP_REQUEST: {
      return userAddGroup(data);
    }
    case Types.USER_DELETE_REQUEST: {
      return userDelete(data);
    }
    case Types.TEST_RESULT_REQUEST: {
      return testResult(data);
    }
    case Types.PROFILE_DASHBOARD_REQUEST: {
      return profileDashboardData(data);
    }
    case Types.ASSESSMENT_SHOWONEPACKAGE_REQUEST: {
      return getAssessmentShowOnePackage(data);
    }
    case Types.PAYMENT_DISCOUNTCODE_REQUEST: {
      return paymentDiscountCode(data, id);
    }
    case Types.SSO_LOGIN_REQUEST: {
      return SSOLoginGet();
    }
    case Types.MHESAM_ISSUEREQUEST_REQUEST: {
      return IssueRequest(data);
    }
    case Types.MHESAM_OTPSEND_REQUEST: {
      return mHesamOTPSend(id, data);
    }
    case Types.MHESAM_PURCHASEUPDATE_REQUEST: {
      return PurchaseUpdate(data);
    }
    case Types.MHESAM_USERCREDITLIST_REQUEST: {
      return UserCreditList(data);
    }
    case Types.SHOW_NOTIFICATION_REQUEST: {
      return ShowNotifications();
    }
    case Types.SEEN_NOTIFICATION_REQUEST: {
      return SeenNotifications(data);
    }
  }
};

const getAssessmentList = async (data) => {
  // store.dispatch(Action.AssessmentShowList(data, 'request') as any);
  return await assessmentHttp.showAssessmentList(data);
};
const deleteAssessment = async (data) => {
  // store.dispatch(Action.AssessmentDelete(data, 'request') as any);
  return await assessmentHttp.remove(data);
};
const changeAssessmentStatus = async (id, data) => {
  // store.dispatch(Action.AssessmentActivation(id, data, 'request') as any);
  return await assessmentHttp.activation(id, data);
};
const getAssessment = async (id) => {
  // store.dispatch(Action.AssessmentShowOne(id) as any);
  return await assessmentHttp.showOneAssessment(id);
};
const getAssessmentUsers = (data) => {
  store.dispatch(Action.AssessmentUsers(data) as any);
};
const assessmentOrder = (data) => {
  store.dispatch(Action.AssessmentOrder(data, 'request') as any);
};
const assessmentEdit = async (id, data) => {
  // store.dispatch(Action.AssessmentEdit(id, data, 'request') as any);
  return await assessmentHttp.edit(id, data);
};
const getQuestionnaireUsers = (data) => {
  store.dispatch(Action.UsersByQuestionnaire(data) as any);
};
const assessmentStore = (data) => {
  store.dispatch(Action.AssessmentStore(data, 'request') as any);
};
const getAllUsers = (data) => {
  store.dispatch(Action.AllUsersShowList(data) as any);
};
const getUserList = async (data: any) => {
  // store.dispatch(Action.UserShowList(data) as any);
  return await userHttp.userList(data);
};

const getUserInfo = (user_id, owner_id) => {
  store.dispatch(Action.UserShowOne(user_id, owner_id) as any);
};
const getGroupList = (data) => {
  store.dispatch(Action.GroupShowList(data) as any);
};
const cancelUserAssignment = async (data) => {
  // store.dispatch(Action.UserCancelAssign(data) as any);
  return await userHttp.cancelUserAssign(data);
};
const userAssignAssessment = async (data) => {
  // store.dispatch(Action.UserAssign(data, 'request') as any);
  return await userHttp.assignToAssessment(data);
};
const deleteGroup = (data) => {
  store.dispatch(Action.GroupDelete(data, 'request') as any);
};

const GroupInfo = (data, id) => {
  store.dispatch(Action.GroupShowOne(id, data) as any);
};
const GroupCreate = (data) => {
  store.dispatch(Action.GroupCreat(data, 'request') as any);
};
const GroupEdit = (data, id) => {
  store.dispatch(Action.GroupEdit(id, data, 'request') as any);
};
const getQuestionnaires = (data) => {
  store.dispatch(Action.QuestionnaireShowList(data) as any);
};

const userRegister = async (data) => {
  // store.dispatch(Action.UserRegister(data, 'request') as any);
  return await userHttp.registerUser(data);
};

const userEdit = (id, data) => {
  store.dispatch(Action.UserEdit(id, data, 'request') as any);
};

const userAddGroup = (data) => {
  store.dispatch(Action.UserAddGroup(data) as any);
};

const userDelete = async (data) => {
  // store.dispatch(Action.UserDelete(data, 'request') as any);
  return await userHttp.removeUser(data);
};

const testResult = (data) => {
  store.dispatch(Action.TestResult(data) as any);
};

const profileDashboardData = (data) => {
  store.dispatch(Action.ProfileDashboard(data) as any);
};
const getAssessmentShowOnePackage = (id) => {
  store.dispatch(Action.AssessmentShowOnePackage(id) as any);
};
const paymentDiscountCode = (ownerId, couponCode) => {
  store.dispatch(Action.PaymentDicountCode(ownerId, couponCode) as any);
};
const SSOLoginGet = () => {
  store.dispatch(Action.SSOLogin() as any);
};
const IssueRequest = async (data) => {
  return await mHesamHttp.issueRequest(data);
};
const mHesamOTPSend = (id, data) => {
  store.dispatch(Action.MHesamOTPSend(id, data, 'request') as any);
};

const PurchaseUpdate = async (data) => {
  return await mHesamHttp.purchaseUpdate(data);
};

const UserCreditList = async (data) => {
  return await mHesamHttp.userCreditList(data);
};
const ShowNotifications = async () => {
  store.dispatch(Action.ShowNotification('request') as any);

  // return await adminHttp.showNotification();
};
const SeenNotifications = async (data) => {
  // store.dispatch(Action.ShowNotification('request') as any);
  return await adminHttp.seenNotification(data);
};

// const SendMultiNotification = async () => {
//   return await adminHttp.sendMultiNotification();
// };

// const SendNotification = async () => {
//   return await adminHttp.sendNotification();
// };
