import { TextareaHTMLAttributes } from 'react';

import { TErrorBehaviour } from '@/types';

export type TTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  TErrorBehaviour;
