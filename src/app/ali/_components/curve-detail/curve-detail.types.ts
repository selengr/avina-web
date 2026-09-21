import { ReactNode } from 'react';

export type Position =
  | 'topRight'
  | 'topLeft'
  | 'bottomRight'
  | 'bottomLeft'
  | 'flat';

export interface ICurveDetailProps {
  children: ReactNode;
  imageSrc: string;
  customClasses?: {
    contentStyle: string;
    svgStyle: string;
  };
  position: Position;
}
