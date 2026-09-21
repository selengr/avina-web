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
    <main className="grid min-h-[60vh] place-items-center px-6 py-24 sm:py-32 my-8 lg:px-8 bg-paper">
      <div className="text-center max-w-lg">
        <p className="text-base font-semibold text-primary">مشکلی پیش آمد</p>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-primary-text">
          {error.message || 'خطایی رخ داد'}
        </h1>
        <p className="mt-6 text-base leading-7 text-secondary">
          لطفاً دوباره امتحان کنید. اگر مشکل ادامه داشت با پشتیبانی تماس بگیرید.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <StylizedButton
            className="py-7 min-w-52"
            text="دوباره امتحان کنید"
            onClick={reset}
          />
          <Link
            href="/"
            className="text-primary-text px-6 border border-primary-text rounded-3xl py-2 hover:bg-primary-lighter transition-colors"
          >
            بازگشت به خانه
          </Link>
        </div>
      </div>
    </main>
  );
}
