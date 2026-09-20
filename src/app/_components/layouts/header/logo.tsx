import Image from 'next/image';
import Link from 'next/link';
import { PATH_PAGE } from '../../../../../routes/paths';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link
      href={PATH_PAGE.root}
      aria-label="آوینا"
      className="inline-flex"
    >
      <Image
        width={160}
        height={70}
        alt="آوینا"
        src="/logo/logo.svg"
        className={className}
        priority
      />
    </Link>
  );
}
