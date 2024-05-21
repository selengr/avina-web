import { lazyLoad } from 'utils/loadable';

export const AssessmentList_admin = lazyLoad(
  () => import('./assessment/index'),
  (module) => module.AdminAssessment,
);

export const AssessmentInfo_admin = lazyLoad(
  () => import('./assessment/index'),
  (module) => module.InfoAssessment,
);

export const AssessmentForm_admin = lazyLoad(
  () => import('./assessment/index'),
  (module) => module.AssessmentForm,
);

export const OrderList_admin = lazyLoad(
  () => import('./order/index'),
  (module) => module.AllOrder,
);

export const OrderInfo_admin = lazyLoad(
  () => import('./order/index'),
  (module) => module.InfoOrder,
);

export const OwnerList_admin = lazyLoad(
  () => import('./owner/index'),
  (module) => module.Owner,
);

export const OwnerInfo_admin = lazyLoad(
  () => import('./owner/index'),
  (module) => module.OwnerInfo,
);

export const OwnerForm_admin = lazyLoad(
  () => import('./owner/index'),
  (module) => module.OwnerForm,
);

export const QuestionnaireList_admin = lazyLoad(
  () => import('./questionnaire/index'),
  (module) => module.Questionnaire,
);

export const QuestionnaireEdit_admin = lazyLoad(
  () => import('./questionnaire/index'),
  (module) => module.EditQuestionnaire,
);

export const QuestionnaireInfo_admin = lazyLoad(
  () => import('./questionnaire/index'),
  (module) => module.QuestionnaireInfo,
);

export const UserList_admin = lazyLoad(
  () => import('./user/index'),
  (module) => module.List,
);

export const UserEdit_admin = lazyLoad(
  () => import('./user/index'),
  (module) => module.EditUserAdmin,
);

export const UserInfo_admin = lazyLoad(
  () => import('./user/index'),
  (module) => module.UserInfo,
);

export const AllLogs = lazyLoad(
  () => import('./others/index'),
  (module) => module.AllLogs,
);

export const Commands = lazyLoad(
  () => import('./others/index'),
  (module) => module.Commands,
);

export const Config = lazyLoad(
  () => import('./others/index'),
  (module) => module.Config,
);

export const FrontVersion = lazyLoad(
  () => import('./others/index'),
  (module) => module.FrontVersion,
);

export const LoginActivities = lazyLoad(
  () => import('./others/index'),
  (module) => module.LoginActivities,
);

export const SetConfig = lazyLoad(
  () => import('./others/index'),
  (module) => module.SetConfig,
);

export const UpdateServer = lazyLoad(
  () => import('./others/index'),
  (module) => module.UpdateServer,
);

export const ImportExcel = lazyLoad(
  () => import('./importExcel/index'),
  (module) => module.ImportExcel,
);

export const UpdateFront = lazyLoad(
  () => import('./others/index'),
  (module) => module.UpdateFront,
);
export const DatabaseBackup = lazyLoad(
  () => import('./databaseBackup/index'),
  (module) => module.DatabaseBackup,
);
export const SendNotification = lazyLoad(
  () => import('./sendNotification/index'),
  (module) => module.SendNotification,
);
export const SendSMS = lazyLoad(
  () => import('./sendSMS/index'),
  (module) => module.SendSMS,
);
