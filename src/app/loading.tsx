export default function Loading() {
  return (
    <div
      className="w-full min-h-[50vh] flex flex-col items-center justify-center gap-4 px-4"
      role="status"
      aria-live="polite"
      aria-label="در حال بارگذاری"
    >
      <div className="h-10 w-10 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
      <p className="text-secondary text-m-body1">در حال بارگذاری...</p>
      <span className="sr-only">لطفاً صبر کنید</span>
    </div>
  );
}
