import Image from 'next/image';
import React from 'react';
import { IAvatarDetailProps } from './avatar-detail.types';

const AvatarDetail: React.FC<IAvatarDetailProps> = ({ src }) => {
  return (
    <>
      <Image
        src={src}
        alt="img"
        width={64}
        height={64}
        className="rounded-full"
      />
    </>
  );
};

export default AvatarDetail;
