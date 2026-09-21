import React from 'react';
import { IDescriptionDetailProps } from './description-detail.types';

const DescriptionDetail: React.FC<IDescriptionDetailProps> = ({
  children,
  className,
}) => {
  return (
    <p className={`text-secondary text-d-body2 leading-6 ${className}`}>
      {children}
    </p>
  );
};

export default DescriptionDetail;
