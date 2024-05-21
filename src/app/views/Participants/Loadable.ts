import { lazyLoad } from 'utils/loadable';

export const Users = lazyLoad(
  () => import('app/pages/participants'),
  (module) => module.Users,
);

export const UserForm = lazyLoad(
  () => import('app/pages/participants'),
  (module) => module.Index,
);
