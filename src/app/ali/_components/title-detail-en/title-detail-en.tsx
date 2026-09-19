import React from 'react';
import { ITitleDetailEnProps } from './title-detail-en.types';

const TitleDetailEn: React.FC<ITitleDetailEnProps> = ({ children }) => {
  return (
    <div className="text-m-h6 text-disabled-text font-light">{children}</div>
  );
};

export default TitleDetailEn;
