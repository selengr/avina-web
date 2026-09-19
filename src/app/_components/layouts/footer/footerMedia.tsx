'use client';

import dynamic from 'next/dynamic';

export const Media = dynamic(() => import('../../common/media/media'), {
  ssr: false,
});

const FooterMedia: React.FC = () => {
  return (
    <>
      <Media className="justify-center pt-4 mb-16 md:mb-2 md:mt-10" />
    </>
  );
};

export default FooterMedia;
