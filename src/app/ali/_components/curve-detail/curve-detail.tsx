import React from 'react';
import style from './curve-detail.module.css';
import { ICurveDetailProps, Position } from './curve-detail.types';
import Image from 'next/image';

const getPaddingClass = (position: Position) => {
  switch (position) {
    case 'topRight':
    case 'bottomRight':
      return 'xl:pl-24 lg:pl-16 md:pl-36 sm:pl-16 pl-20';
    case 'topLeft':
    case 'bottomLeft':
      return 'xl:pr-24 lg:pr-16 md:pr-36 sm:pr-16 pr-20';
    default:
      return '';
  }
};

const CurveDetail: React.FC<ICurveDetailProps> = ({
  children,
  customClasses = { contentStyle: '', svgStyle: '' },
  position,
  imageSrc,
}) => {
  const getPathD = (position: Position) => {
    switch (position) {
      case 'topRight':
        return 'M0.0603 0.4077C0.0279 0.4077 0.0016 0.3167 0.0016 0.2044C0.0016 0.0922 0.0279 0.0012 0.0603 0.0012H0.935C0.971 0.0012 1 0.1028 1 0.2282V0.7672C1 0.8926 0.971 0.9942 0.935 0.9942H0.2627C0.2267 0.9942 0.1977 0.8926 0.1977 0.7672V0.6347C0.1977 0.5093 0.1687 0.4077 0.1327 0.4077H0.0603Z';
      case 'topLeft':
        return 'M0.9397 0.4077C0.9721 0.4077 0.9984 0.3167 0.9984 0.2044C0.9984 0.0922 0.9721 0.0012 0.9397 0.0012H0.065C0.029 0.0012 0 0.1028 0 0.2282V0.7672C0 0.8926 0.029 0.9942 0.065 0.9942H0.7373C0.7733 0.9942 0.8023 0.8926 0.8023 0.7672V0.6347C0.8023 0.5093 0.8313 0.4077 0.8673 0.4077H0.9397Z';
      case 'bottomRight':
        return 'M0.0603 0.5923C0.0279 0.5923 0.0016 0.6833 0.0016 0.7956C0.0016 0.9078 0.0279 0.9988 0.0603 0.9988H0.935C0.971 0.9988 1 0.8972 1 0.7718V0.2328C1 0.1074 0.971 0.0058 0.935 0.0058H0.2627C0.2267 0.0058 0.1977 0.1074 0.1977 0.2328V0.3653C0.1977 0.4907 0.1687 0.5923 0.1327 0.5923H0.0603Z';
      case 'bottomLeft':
        return 'M0.9397 0.5923C0.9721 0.5923 0.9984 0.6833 0.9984 0.7956C0.9984 0.9078 0.9721 0.9988 0.9397 0.9988H0.065C0.029 0.9988 0 0.8972 0 0.7718V0.2328C0 0.1074 0.029 0.0058 0.065 0.0058H0.7373C0.7733 0.0058 0.8023 0.1074 0.8023 0.2328V0.3653C0.8023 0.4907 0.8313 0.5923 0.8673 0.5923H0.9397Z';
      default:
        return '';
    }
  };

  const paddingClass = getPaddingClass(position);
  const pathD = position === 'flat' ? '' : getPathD(position); // No path for 'flat'

  return (
    <div>
      {position !== 'flat' && (
        <svg
          width="0"
          height="0"
        >
          <defs>
            <clipPath
              id={`clip-${position}`}
              clipPathUnits="objectBoundingBox"
            >
              <path d={pathD} />
            </clipPath>
          </defs>
        </svg>
      )}

      <div
        className={`relative inline-block py-2 px-2 bg-white mb-14 ${paddingClass}  ${customClasses.contentStyle} ${style.customClipPath} ${
          position === 'flat'
            ? 'hidden md:flex justify-center items-center rounded-3xl mt-5 md:px-10 lg:px-5'
            : ''
        }`}
        style={
          position !== 'flat' ? { clipPath: `url(#clip-${position})` } : {}
        }
      >
        <div className="flex items-center justify-center min-h-[120px]">
          <div className="w-10 h-10 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-18 xl:h-18 flex-shrink-0">
            <Image
              src={imageSrc}
              alt="icon"
              width={192}
              height={192}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="ps-2 max-w-[280px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CurveDetail;
