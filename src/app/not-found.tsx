import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-[50vh] place-items-center px-6 py-24">
      <div className="text-center">
        <p className="text-primary font-semibold text-lg">۴۰۴</p>
        <h1 className="mt-3 text-2xl font-bold text-primary-text">
          صفحه پیدا نشد
        </h1>
        <p className="mt-4 text-secondary">
          این آدرس وجود ندارد یا جابه‌جا شده است.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 rounded-full bg-primary text-white px-6 py-2 hover:opacity-90 transition-opacity"
        >
          برو به صفحه اصلی
        </Link>
      </div>
    </main>
  );
}
