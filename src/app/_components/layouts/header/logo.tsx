import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Image
      width={160}
      height={70}
      alt="Avina IT Solutions Logo"
      src="/logo/logo.svg"
      className={className}
    />
  );
}
