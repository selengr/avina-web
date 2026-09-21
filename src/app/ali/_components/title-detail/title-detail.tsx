import React from 'react';
import { ITitleDetailProps } from './title-detail.types';

const TitleDetail: React.FC<ITitleDetailProps> = ({ children, className }) => {
  return (
    <p
      className={`text-d-subtitle1 text-primary-text font-semibold ${className}`}
    >
      {children}
    </p>
  );
};

export default TitleDetail;
