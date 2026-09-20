'use client';

import Image from 'next/image';
import Link from 'next/link';

const ChatIcon: React.FC = () => {
  return (
    <Link
      href="/contact#consulting"
      aria-label="درخواست مشاوره"
      className="hidden lg:flex fixed right-12 bottom-10 z-[99999] transition-transform hover:scale-105"
    >
      <Image
        src="/robot/bot.svg"
        alt="چت و مشاوره"
        width={66}
        height={106}
        priority={false}
      />
    </Link>
  );
};

export default ChatIcon;
