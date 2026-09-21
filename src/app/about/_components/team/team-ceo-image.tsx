import Image from 'next/image';
import React from 'react';

const TeamCeoImage = () => {
  return (
    <div className="flex flex-col items-center md:items-start w-full ">
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg 2xl:max-w-lg 3xl:max-w-lg mx-auto ">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 367 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-h-[420px] xl:max-h-[420px] 2xl:max-h-[420px] 3xl:max-h-[420px]"
        >
          <mask
            id="mask0_1473_1811"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="367"
            height="420"
          >
            <path
              d="M260.014 95.2384C250.228 95.2384 242.295 87.3054 242.295 77.5196V17.7188C242.295 7.93298 234.363 0 224.577 0H17.7185C7.93274 0 -0.00021708 7.93296 -0.00021708 17.7188V209.524V328.452C-0.00021708 338.238 7.93274 346.171 17.7185 346.171H69.1253C78.9111 346.171 86.8441 354.104 86.8441 363.89V401.33C86.8441 411.116 94.7771 419.049 104.563 419.049H183.241H348.764C358.55 419.049 366.483 411.116 366.483 401.33V209.524V112.957C366.483 103.171 358.55 95.2384 348.764 95.2384H260.014Z"
              fill="#E8EAFD"
            />
          </mask>
          <g mask="url(#mask0_1473_1811)">
            <image
              href="/images/ceo.svg"
              x="0"
              y="0"
              width="367"
              height="420"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </svg>

        <div className="absolute top-1 right-1 md:right-10 lg:right-0 xl:mr-10 2xl:mr-0  text-primary-text text-left">
          <p className="font-bold text-m-h3 md:text-d-h3">12+ سال </p>
          <p className="text-m-body1 md:text-d-body1">تجربه کاری</p>
        </div>

        <div className="absolute bottom-0 left-0 md:left-10 lg:left-0 xl:ml-10 2xl:ml-0">
          <Image
            src="/images/Group-star.svg"
            alt="icon start"
            width={60}
            height={50}
            className="md:w-[78px] md:h-[63px] lg:w-[70px] lg:h-[58px] xl:w-[78px] xl:h-[63px]"
          />
        </div>
      </div>

      <div className="w-full text-center md:text-right">
        <p className="text-primary-text font-bold text-m-h4 md:text-d-h4 py-4">
          علیرضا کیانژاد مدیر عامل آوینا
        </p>
        <p className="text-secondary-text text-m-body1 md:text-d-body1 w-full text-justify">
          علیرضا بیش از یک دهه روی پروژه‌های نرم‌افزاری و زیرساختی کار کرده و
          امروز روی ساخت تیم و تحویل راهکارهای قابل اتکا برای مشتریان آوینا تمرکز
          دارد.
        </p>
      </div>
    </div>
  );
};

export default TeamCeoImage;
