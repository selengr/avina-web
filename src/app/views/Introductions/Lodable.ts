import { lazyLoad } from 'utils/loadable';

export const Introduction = lazyLoad(
  () => import('app/pages/introduction'),
  (module) => module.Introduction,
);
export const IntroductionInfo = lazyLoad(
  () => import('app/pages/introduction'),
  (module) => module.IntroductionInfo,
);
export const IntroductionPackageInfo = lazyLoad(
  () => import('app/pages/introduction'),
  (module) => module.IntroductionPackageInfo,
);
