import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

export function createQueryClient() {
  return new QueryClient({
    queryCache: new QueryCache({
      onError: () => {},
    }),
    mutationCache: new MutationCache({
      onError: () => {},
    }),
    defaultOptions: {
      queries: {
        retry: 2,
        refetchOnWindowFocus: false,
        throwOnError: false,
        staleTime: 60_000,
        gcTime: 5 * 60_000,
      },
    },
  });
}
