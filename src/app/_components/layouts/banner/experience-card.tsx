export default function ExperienceCard() {
  return (
    <div className="w-[123px] h-[68px] lg:w-[193px] lg:h-[107px] absolute left-[112px] lg:-right-12  lg:left-0 top-8 lg:top-32 bg-white/50 backdrop-blur-sm shadow-z8 rounded-3xl p-2 lg:pr-6">
      <div className="flex flex-col">
        <h3 className="text-m-h5 lg:text-d-h2 text-primary-text font-semibold lg:font-semibold">
          10+ سال
        </h3>
        <div className="text-m-body2 lg:text-m-body1 text-secondary">
          تجربه درخشان و موفق
        </div>
      </div>
    </div>
  );
}
