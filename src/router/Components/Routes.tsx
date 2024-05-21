import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Pages from 'app/views';
import { NotFoundPage } from 'components/NotFoundPage/Loadable';
import { useEffect, useState } from 'react';

function UnAuthRoutes() {
  return (
    <Routes>
      <Route path={'/login'} element={<Pages.LoginForm />} />
      <Route path={'/get'} element={<Pages.GetUserData />} />
      <Route path={'/test'} element={<Pages.Test />} />
      <Route path={'*'} element={<NotFoundPage />} />
      {/*<Route path={'/'} element={<Home />} />*/}
    </Routes>
  );
}

function AgentRoutes(props) {
  const location = useLocation();
  const [isSuperAdmin, setIsSuperAdmin] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname.includes('admin') && props.role === 2) {
      setIsSuperAdmin(true);
    }
  }, [location.pathname]);
  return (
    <Routes>
      {!isSuperAdmin ? (
        <>
          <Route path={'/assessments'} element={<Pages.Assessment_List />} />
          <Route path={'/assessment/new'} element={<Pages.Assessment_Form />} />
          <Route path={'/assessment/edit'} element={<Pages.Assessment_Form />} />
          <Route path={'/assessment/info/edit'} element={<Pages.Assessment_Form />} />
          <Route path={'/assessment/info'} element={<Pages.Assessment_Info />} />
          <Route path={'/users'} element={<Pages.Users />} />
          <Route path={'/users/new'} element={<Pages.UserForm />} />
          <Route path={'/users/edit'} element={<Pages.UserForm />} />
          <Route path={'/groups'} element={<Pages.Groups />} />
          <Route path={'/groups/info'} element={<Pages.GroupInfo />} />
          <Route path={'/groups/new'} element={<Pages.GroupForm />} />
          <Route path={'/groups/edit'} element={<Pages.GroupForm />} />
          <Route path={'/group/new'} element={<Pages.GroupForm />} />
          <Route path={'/group/edit'} element={<Pages.GroupForm />} />
          <Route path={'/profile'} element={<Pages.Profile />} />
          <Route path={'/suggestion'} element={<Pages.Suggestion />} />
          <Route path={'/suggestion/info'} element={<Pages.SuggestionInfo />} />
          <Route path={'/introduction'} element={<Pages.Introduction />} />
          <Route path={'/introduction/info'} element={<Pages.IntroductionInfo />} />
          <Route path={'/report'} element={<Pages.ReportAssessments />} />
          <Route path={'/report/info'} element={<Pages.ReportInfo />} />
          <Route path={'/report/initial'} element={<Pages.ReportInit />} />
          <Route path={'/report/details'} element={<Pages.ReportDetail />} />
          <Route path={'/cart'} element={<Pages.Shopping />} />
          <Route path={'/Dashboard'} element={<Pages.AgentDashboard />} />
          <Route path={'/login'} element={<Pages.AgentDashboard />} />
          <Route path={'/'} element={<Pages.AgentDashboard />} />
          <Route path={'/get'} element={<Pages.GetUserData />} />
        </>
      ) : (
        <>
          <Route path={'/admin/users'} element={<Pages.UserList_admin />} />
          <Route path={'/admin/user/info'} element={<Pages.UserInfo_admin />} />
          <Route path={'/admin/user/edit'} element={<Pages.UserEdit_admin />} />
          <Route path={'/admin/assessments'} element={<Pages.AssessmentList_admin />} />
          <Route path={'/admin/assessment/new'} element={<Pages.AssessmentForm_admin />} />
          <Route path={'/admin/assessment/edit'} element={<Pages.AssessmentForm_admin />} />
          <Route path={'/admin/assessment/info'} element={<Pages.AssessmentInfo_admin />} />
          <Route path={'/admin/questionnaires'} element={<Pages.QuestionnaireList_admin />} />
          <Route path={'/admin/questionnaire/info'} element={<Pages.QuestionnaireInfo_admin />} />
          <Route path={'/admin/questionnaire/edit'} element={<Pages.QuestionnaireEdit_admin />} />
          <Route path={'/admin/owners'} element={<Pages.OwnerList_admin />} />
          <Route path={'/admin/owner/new'} element={<Pages.OwnerForm_admin />} />
          <Route path={'/admin/owner/edit'} element={<Pages.OwnerForm_admin />} />
          <Route path={'/admin/owner/info'} element={<Pages.OwnerInfo_admin />} />
          <Route path={'/admin/orders'} element={<Pages.OrderList_admin />} />
          <Route path={'/admin/order/info'} element={<Pages.OrderInfo_admin />} />
          <Route path={'/admin/logs'} element={<Pages.AllLogs />} />
          <Route path={'/admin/commands'} element={<Pages.Commands />} />
          <Route path={'/admin/config'} element={<Pages.Config />} />
          <Route path={'/admin/frontversion'} element={<Pages.FrontVersion />} />
          <Route path={'/admin/loginactivities'} element={<Pages.LoginActivities />} />
          <Route path={'/admin/setconfig'} element={<Pages.SetConfig />} />
          <Route path={'/admin/updateserver'} element={<Pages.UpdateServer />} />
          <Route path={'/admin/notification'} element={<Pages.SendNotification />} />
          <Route path={'/admin/sendsms'} element={<Pages.SendSMS />} />
          <Route path={'/admin/backup'} element={<Pages.DatabaseBackup />} />
          <Route path={'/admin/importExcel'} element={<Pages.ImportExcel />} />
          <Route path={'/admin/updateFront'} element={<Pages.UpdateFront />} />
        </>
      )}
      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  );
}

function ScopeRoutes() {
  return (
    <Routes>
      <Route path={'/assessments'} element={<Pages.MyAssessments />} />
      <Route path={'/assessment/info'} element={<Pages.MyAssessmentInfo />} />
      <Route path={'/assessment/test'} element={<Pages.MyAssessmentTest />} />
      <Route path={'/profile'} element={<Pages.Profile />} />
      <Route path={'/report/initial'} element={<Pages.ReportInit />} />
      <Route path={'/report/details'} element={<Pages.ReportDetail />} />
      <Route path={'/Dashboard'} element={<Pages.ScopeDashboard />} />
      <Route path={'/login'} element={<Pages.ScopeDashboard />} />
      <Route path={'/'} element={<Pages.ScopeDashboard />} />
      <Route path={'/get'} element={<Pages.GetUserData />} />
      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  );
}

function UserRoutes(props) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (props.userName === null) {
      if (location.pathname !== '/profile') {
        navigate('/profile');
      }
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path={'/assessments'} element={<Pages.MyAssessments />} />
      <Route path={'/assessment/info'} element={<Pages.MyAssessmentInfo />} />
      <Route path={'/assessment/test'} element={<Pages.MyAssessmentTest />} />
      <Route path={'/report/initial'} element={<Pages.ReportInit />} />
      <Route path={'/report/details'} element={<Pages.ReportDetail />} />
      <Route path={'/introduction'} element={<Pages.Introduction />} />
      <Route path={'/introduction/info'} element={<Pages.IntroductionPackageInfo />} />
      <Route path={'/profile'} element={<Pages.Profile />} />
      <Route path={'/cart'} element={<Pages.Shopping />} />
      <Route path={'*'} element={<NotFoundPage />} />
      <Route path={'/test'} element={<Pages.Test />} />
      <Route path={'/Dashboard'} element={<Pages.UserDashboard />} />
      <Route path={'/login'} element={<Pages.UserDashboard />} />
      <Route path={'/'} element={<Pages.UserDashboard />} />
      <Route path={'/get'} element={<Pages.GetUserData />} />
      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  );
}

const exportedRoutes = {
  unAuth: UnAuthRoutes,
  agents: AgentRoutes,
  scopes: ScopeRoutes,
  users: UserRoutes,
};
export { UnAuthRoutes, AgentRoutes, ScopeRoutes, UserRoutes };

export default exportedRoutes;
