import { Test } from '../pages/Test';
import { HomePage } from '../pages/HomePage/Loadable';
import { LoginForm } from './Auth/Loadable';
import { GroupForm, GroupInfo, Groups } from './Groups/Loadable';
import { AssessmentForm, AssessmentInfo, Assessments } from './Assessments/Loadable';
import { UserForm, Users } from './Participants/Loadable';
import { GetUserData } from '../pages/Auth/GetUserData';
import { Profile } from './Profile/Loadable';
import { Suggestion, SuggestionInfo } from './Suggestions/Lodable';
import { Introduction, IntroductionInfo, IntroductionPackageInfo } from './Introductions/Lodable';
import { MyAssessmentInfo, MyAssessments, MyAssessmentTest } from './MyAssessments/Loadable';
import { Shopping } from './Shopping/Loadable';
import { ReportAssessments, ReportDetail, ReportInfo, ReportInit } from './Reports/Loadable';
import { AgentDashboard, ScopeDashboard, UserDashboard } from './Dashboard/Loadable';
import {
  AllLogs,
  AssessmentForm_admin,
  AssessmentInfo_admin,
  AssessmentList_admin,
  Commands,
  Config,
  DatabaseBackup,
  FrontVersion,
  ImportExcel,
  LoginActivities,
  OrderInfo_admin,
  OrderList_admin,
  OwnerForm_admin,
  OwnerInfo_admin,
  OwnerList_admin,
  QuestionnaireEdit_admin,
  QuestionnaireInfo_admin,
  QuestionnaireList_admin,
  SendNotification,
  SendSMS,
  SetConfig,
  UpdateFront,
  UpdateServer,
  UserEdit_admin,
  UserInfo_admin,
  UserList_admin,
} from '../pages/Admin/Loadable';

import './App.css';
import Abbas from '../pages/Auth/test';

const Pages = {
  Shopping,
  Assessment_List: Assessments,
  Assessment_Form: AssessmentForm,
  Assessment_Info: AssessmentInfo,
  Test,
  Profile: Profile,
  HomePage,
  LoginForm,
  GetUserData,
  UserForm,
  Users,
  Groups,
  GroupForm,
  GroupInfo,
  Suggestion,
  SuggestionInfo,
  Introduction,
  IntroductionInfo,
  IntroductionPackageInfo,
  ImportExcel,
  MyAssessmentInfo,
  MyAssessments,
  MyAssessmentTest,
  ReportAssessments,
  ReportInfo,
  ReportInit,
  ReportDetail,
  AssessmentList_admin,
  AssessmentForm_admin,
  AssessmentInfo_admin,
  OrderInfo_admin,
  OrderList_admin,
  OwnerInfo_admin,
  OwnerList_admin,
  OwnerForm_admin,
  UserEdit_admin,
  UserInfo_admin,
  UserList_admin,
  QuestionnaireEdit_admin,
  QuestionnaireInfo_admin,
  QuestionnaireList_admin,
  SetConfig,
  Config,
  Commands,
  FrontVersion,
  LoginActivities,
  AllLogs,
  UpdateServer,
  SendSMS,
  SendNotification,
  DatabaseBackup,
  UpdateFront,
  AgentDashboard,
  UserDashboard,
  ScopeDashboard,
  Abbas,
};

export default Pages;
