'use client';

import { useEffect } from 'react';

let lockCount = 0;

/**
 * Locks document body scroll while `locked` is true.
 * Uses a counter so nested overlays (drawer + search) don't unlock early.
 */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked || typeof document === 'undefined') return;

    lockCount += 1;
    if (lockCount === 1) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) {
        document.body.style.overflow = '';
      }
    };
  }, [locked]);
}
