'use client';

import Link from 'next/link';
import StylizedButton from './_components/common/field/button/stylized-button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 my-16 1g:px-8 bg-warning-light ">
      <div className="text-center">
        <p className="text-base font-semibold text-emerald-700 text-emerald-500">
          There was a problem{' '}
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-50 sm:text">
          {error.message || 'Something went wrong'}{' '}
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-600 text-emerald-500">
          لطفاً مجدد امتحان کنید یا اگر مشکل ادامه داشت با پشتیبانی تماس بگیرید
          !!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <StylizedButton
            className="py-7 min-w-52"
            text={'دوباره امتحان کنید'}
            onClick={reset}
          />

          <Link
            href="/"
            className="text-gray-50 px-6 border border-black rounded-3xl p-2"
          >
            به خانه برگرد
          </Link>
        </div>
      </div>
    </main>
  );
}
