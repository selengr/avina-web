import { lazyLoad } from 'utils/loadable';

export const Profile = lazyLoad(
  () => import('app/pages/profile'),
  (module) => module.Profile,
);
