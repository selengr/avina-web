import React from 'react';
import { ICardDetailProps } from './card-detail.types';

const CardDetail: React.FC<ICardDetailProps> = ({ children }) => {
  return (
    <div className="bg-white rounded-[20px] px-8 py-6 mb-10 flex flex-col justify-between items-center min-w-[290px] lg:w-[370px] gap-2 shadow-card">
      {children}
    </div>
  );
};

export default CardDetail;
