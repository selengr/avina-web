import { lazyLoad } from 'utils/loadable';

export const Suggestion = lazyLoad(
  () => import('app/pages/suggestion'),
  (module) => module.Suggestion,
);
export const SuggestionInfo = lazyLoad(
  () => import('app/pages/suggestion'),
  (module) => module.SuggestionInfo,
);
