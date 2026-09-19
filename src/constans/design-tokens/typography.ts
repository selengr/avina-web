import { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config';

export const tailwindTypography:
  | ResolvableTo<
      KeyValuePair<
        string,
        | string
        | [fontSize: string, lineHeight: string]
        | [
            fontSize: string,
            configuration: Partial<{
              lineHeight: string;
              letterSpacing: string;
              fontWeight: string | number;
            }>,
          ]
      >
    >
  | undefined = {
  'd-h1': ['48px', '80px'],
  'd-h2': ['32px', '64px'],
  'd-h3': ['28px', '48px'],
  'd-h4': ['24px', '36px'],
  'd-h5': ['20px', '30px'],
  'd-h6': ['18px', '28px'],
  'm-h1': ['32px', '80px'],
  'm-h2': ['28px', '64px'],
  'm-h3': ['24px', '48px'],
  'm-h4': ['20px', '36px'],
  'm-h5': ['18px', '30px'],
  'm-h6': ['16px', '28px'],
  'd-subtitle1': ['16px', '24px'],
  'd-subtitle2': ['14px', '22px'],
  'm-subtitle1': ['16px', '24px'],
  'm-subtitle2': ['14px', '22px'],
  'd-body1': ['16px', '24px'],
  'd-body2': ['14px', '22px'],
  'm-body1': ['14px', '24px'],
  'm-body2': ['12px', '22px'],
  'd-caption': ['12px', '18px'],
  'm-caption': ['10px', '18px'],
  'd-overline': ['12px', '18px'],
  'm-overline': ['10px', '18px'],
};
