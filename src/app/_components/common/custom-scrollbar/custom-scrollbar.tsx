'use client';

import { useEffect, useState } from 'react';

export default function CustomScrollbar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-2 md:left-2 lg:left-6 2xl:left-44  bottom-[100px] h-[174px] w-[3px] bg-divider rounded-full">
      <div
        className="absolute w-full rounded-full bg-secondary transition-all duration-150 ease-out"
        style={{
          height: `${scrollPercentage}%`,
          bottom: 0,
        }}
      />
    </div>
  );
}
