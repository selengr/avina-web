import { combineReducers } from 'redux';
import { alertReducer, backDropReducer, promptReducer } from './Common/Reducers';
import PersistReducer from './Common/PersistReducer';
import { Auth_EnterCode_Reducer, Auth_EnterPhone_Reducer, Auth_Login_Reducer } from './services/Auth';
import {
  Assessment_Activation_Reducer,
  Assessment_Delete_Reducer,
  Assessment_Edit_Reducer,
  Assessment_Order_Reducer,
  Assessment_Packages_Reducer,
  Assessment_ShowList_Reducer,
  Assessment_ShowOne_Reducer,
  Assessment_ShowOnePackage_Reducer,
  Assessment_Store_Reducer,
  Assessment_SystemsList_Reducer,
  Assessment_Users_Reducer,
  Assessment_UsersByQuestionnaire_Reducer,
} from './services/Assessment';
import {
  AllUsers_ShowList_Reducer,
  User_AddGroup_Reducer,
  User_Assign_Reducer,
  User_CancelAssign_Reducer,
  User_Delete_Reducer,
  User_Register_Reducer,
  User_ShowList_Reducer,
  User_ShowOne_Reducer,
  UserEdit_Reducer,
} from './services/User';
import { Questionnaire_ShowList_Reducer, Questionnaire_ShowOne_Reducer } from './services/Questionnaire';
import { Group_Create_Reducer, Group_Delete_Reducer, Group_Edit_Reducer, Group_ShowList_Reducer, Group_ShowOne_Reducer } from './services/Group';
import { ProfileDashboard_Reducer, ProfileEdit_Reducer } from './services/Profile';
import { Test_Result_Reducer } from './services/Test';
import { Payment_DiscountCode_Reducer } from './services/Payment';
import { SSO_LOGIN_Reducer } from './services/Auth/SSO/PersistReducer';
import { MHesam_IssueRequest_Reducer, MHesam_OTPSend_Reducer, MHesam_PurchaseUpdate_Reducer, MHesam_UserCreditList_Reducer } from './mresalatServices/mHesam';
import { Show_Notification_Reducer } from './services/Notification';
export const appReducer = combineReducers({
  persist: PersistReducer,
  //-----------//
  backDrop: backDropReducer,
  alert: alertReducer,
  prompt: promptReducer,
  //-----------//
  authLogin: Auth_Login_Reducer,
  authEnterPhone: Auth_EnterPhone_Reducer,
  authEnterCode: Auth_EnterCode_Reducer,
  ssoLogin: SSO_LOGIN_Reducer,
  //-----------//
  assessmentStore: Assessment_Store_Reducer,
  assessmentEdit: Assessment_Edit_Reducer,
  assessmentShowList: Assessment_ShowList_Reducer,
  assessmentDelete: Assessment_Delete_Reducer,
  assessmentActivation: Assessment_Activation_Reducer,
  assessmentShowOne: Assessment_ShowOne_Reducer,
  assessmentShowOnePackage: Assessment_ShowOnePackage_Reducer,
  assessmentSystemsList: Assessment_SystemsList_Reducer,
  assessmentOrder: Assessment_Order_Reducer,
  assessmentPackages: Assessment_Packages_Reducer,
  assessmentUserList: Assessment_Users_Reducer,
  assessmentUsersByQuestionnaire: Assessment_UsersByQuestionnaire_Reducer,
  //-----------//
  userShowList: User_ShowList_Reducer,
  allUserShowList: AllUsers_ShowList_Reducer,
  userDelete: User_Delete_Reducer,
  userEdit: UserEdit_Reducer,
  userAddGroup: User_AddGroup_Reducer,
  userRegister: User_Register_Reducer,
  userCancelAssign: User_CancelAssign_Reducer,
  userShowOne: User_ShowOne_Reducer,
  userAssign: User_Assign_Reducer,
  //-----------//
  questionnaireShowList: Questionnaire_ShowList_Reducer,
  questionnaireShowOne: Questionnaire_ShowOne_Reducer,
  //-----------//
  groupShowList: Group_ShowList_Reducer,
  groupDelete: Group_Delete_Reducer,
  groupEdit: Group_Edit_Reducer,
  groupCreate: Group_Create_Reducer,
  groupShowOne: Group_ShowOne_Reducer,
  //-----------//
  profileEdit: ProfileEdit_Reducer,
  profileDashboard: ProfileDashboard_Reducer,
  //-----------//
  testResult: Test_Result_Reducer,
  //-----------//
  paymentDiscountCode: Payment_DiscountCode_Reducer,
  //-----------//
  mHesamIssueRequest: MHesam_IssueRequest_Reducer,
  mHesamUserCreditList: MHesam_UserCreditList_Reducer,
  mHesamPurchaseUpdateList: MHesam_PurchaseUpdate_Reducer,
  //-----------//
  mHesamOTPSend: MHesam_OTPSend_Reducer,
  showNotification: Show_Notification_Reducer,
});

export const getRootReducer = (state, action) => {
  return appReducer(state, action);
};

export default getRootReducer;
