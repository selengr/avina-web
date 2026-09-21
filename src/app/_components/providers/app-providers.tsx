'use client';

import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { createQueryClient } from '@/lib/react-query/react-query.config';

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fresh client per browser session — avoids sharing cache across SSR requests.
  const [client] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );
}
