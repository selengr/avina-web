import { lazyLoad } from 'utils/loadable';

export const Groups = lazyLoad(
  () => import('app/pages/group'),
  (module) => module.Groups,
);

export const GroupForm = lazyLoad(
  () => import('app/pages/group'),
  (module) => module.GroupForm,
);

export const GroupInfo = lazyLoad(
  () => import('app/pages/group'),
  (module) => module.GroupInfo,
);
