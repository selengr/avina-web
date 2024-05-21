import { lazyLoad } from 'utils/loadable';

export const ReportAssessments = lazyLoad(
  () => import('app/pages/Reports'),
  (module) => module.ReportAssessments,
);

export const ReportInfo = lazyLoad(
  () => import('app/pages/Reports'),
  (module) => module.ReportInfo,
);

export const ReportInit = lazyLoad(
  () => import('app/pages/Reports'),
  (module) => module.ReportInit,
);

export const ReportDetail = lazyLoad(
  () => import('app/pages/Reports'),
  (module) => module.ReportDetail,
);
