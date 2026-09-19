import Image from 'next/image';

interface SatisfactionCardProps {
  percentage: number;
  totalUsers: string;
}

export default function SatisfactionCard({
  percentage = 95,
  totalUsers = '9,194',
}: SatisfactionCardProps) {
  return (
    <div className="w-[223px] h-[90px] lg:w-[304px] lg:h-[107px] absolute bottom-5 left-4 lg:left-12 xl:left-16 lg:bottom-[56px] xl:bottom-[86px] bg-white/50 backdrop-blur-sm shadow-z8 rounded-3xl p-2 lg:px-5 lg:py-3">
      <div className="flex flex-row">
        <div className="relative w-8 h-8 lg:h-16 lg:w-16 rounded-full overflow-hidden">
          <Image
            src={'/images/profile.svg'}
            alt="Profile"
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-col pr-1 lg:pr-3 space-y-[11px]">
          <h3 className="text-m-subtitle2 lg:text-d-body1 text-primary-text font-semibold lg:font-normal">
            رضایتمندی کاربران{' '}
            <span className="lg:text-d-subtitle2 lg:font-semibold">
              ({totalUsers} نفر)
            </span>
          </h3>
          <div className="text-m-body1 lg:text-d-body1 text-secondary">
            {percentage}% افراد
          </div>

          <div className="relative h-2 bg-divider rounded-full overflow-hidden">
            <div
              className="absolute top-0 right-0 h-full bg-[#FDB900] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
