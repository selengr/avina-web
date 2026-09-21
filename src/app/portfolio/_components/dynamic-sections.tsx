'use client';

import dynamic from 'next/dynamic';

export const Projects = dynamic(() => import('./projects/projects'), {
  ssr: false,
});
