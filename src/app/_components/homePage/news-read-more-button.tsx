'use client';

import { useRouter } from 'next/navigation';
import StylizedButton from '../common/field/button/stylized-button';

export default function NewsReadMoreButton() {
  const router = useRouter();

  return (
    <StylizedButton
      text="بیشتر بخوانید..."
      className="my-2 md:my-0 md:mt-4 py-2 min-w-52"
      onClick={() => router.push('/contact')}
    />
  );
}
