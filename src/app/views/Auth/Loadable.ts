/** * * Asynchronously loads the component for
 Auth
 * */
import { lazyLoad } from 'utils/loadable';

export const LoginForm = lazyLoad(
  () => import('app/pages/Auth'),
  (module) => module.Auth,
);
