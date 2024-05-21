import { lazyLoad } from 'utils/loadable';

export const Shopping = lazyLoad(
  () => import('app/pages/shopping'),
  (module) => module.Shopping,
);
