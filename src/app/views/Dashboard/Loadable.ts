/** * * Asynchronously loads the component
 * */
import { lazyLoad } from 'utils/loadable';

export const UserDashboard = lazyLoad(
  () => import('app/pages/Dashboard'),
  (module) => module.UserDashboard,
);
export const AgentDashboard = lazyLoad(
  () => import('app/pages/Dashboard'),
  (module) => module.AgentDashboard,
);

export const ScopeDashboard = lazyLoad(
  () => import('app/pages/Dashboard'),
  (module) => module.ScopeDashboard,
);
