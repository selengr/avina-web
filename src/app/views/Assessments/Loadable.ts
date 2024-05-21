import { lazyLoad } from 'utils/loadable';

export const Assessments = lazyLoad(
  () => import('app/pages/assessment'),
  (module) => module.Assessments,
);

export const AssessmentForm = lazyLoad(
  () => import('app/pages/assessment'),
  (module) => module.AssessmentForm,
);

export const AssessmentInfo = lazyLoad(
  () => import('app/pages/assessment'),
  (module) => module.AssessmentInfo,
);
