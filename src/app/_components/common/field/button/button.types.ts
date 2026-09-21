import { ButtonHTMLAttributes } from 'react';

export type TLoadingBehaviour = {
  isLoading?: boolean;
  loadingText?: string;
};

type TButtonVariants = 'contained' | 'outlined' | 'text' | 'soft';
type TButtonSizes = 'lg' | 'sm' | 'md';
export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  TLoadingBehaviour & {
    variant?: TButtonVariants;
    size?: TButtonSizes;
    icon?: React.ReactNode;
    shape?: 'normal' | 'full';
    colorType?:
      | 'primary'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | 'error';
  };

interface TCustomClasses {
  btn?: string;
  icon?: string;
  iconWrapper?: string;
  text?: string;
}

export interface TStylizedButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  bgColor?: string;
  hoverdBgColor?: string;
  type?: 'button' | 'submit' | 'reset';
  customClasses?: TCustomClasses;
}
