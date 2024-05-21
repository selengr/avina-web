import { lazyLoad } from 'utils/loadable';

export const MyAssessments = lazyLoad(
  () => import('app/pages/MyAssessment'),
  (module) => module.MyAssessmentList,
);

export const MyAssessmentInfo = lazyLoad(
  () => import('app/pages/MyAssessment'),
  (module) => module.MyAssessmentsInfo,
);

export const MyAssessmentTest = lazyLoad(
  () => import('app/pages/MyAssessment'),
  (module) => module.MyAssessmentsTest,
);
