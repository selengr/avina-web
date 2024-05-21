import { DetailedHTMLProps, InputHTMLAttributes, memo } from 'react';
import styled from 'styled-components/macro';
import { themes } from 'styles/theme/colors';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

declare const variants: ['web30', 'web20', 'web16', 'web14', 'web12', 'mobile12', 'mobile10', 'mobile9' | any];
declare const types: ['body', 'title1', 'title2', 'quote'];
declare const weights: ['black', 'bold', 'medium', 'regular'];
declare const aligns: ['left', 'center', 'right'];
declare const colors: [`primary`, `secondary`];

interface Props extends InputProps {
  variant?: (typeof variants)[number];
  type?: (typeof types)[number];
  weight?: (typeof weights)[number];
  align?: (typeof aligns)[number];
  id?: string;
  style?: any;
  html?: boolean;
  color?: (typeof colors)[number];
}

const variables = {
  typo30: '30px',
  typo20: '20px',
  typo16: '16px',
  typo14: '14px',
  typo12: '12px',
  typo10: '10px',
  typo9: '9px',
};
export const StyledTypography = memo(({ id, type, variant, weight, align, style, color, html, ...props }: Props) => {
  const typographyColor: any = color ? (color === 'secondary' ? { color: themes.light.Typography.Secondary } : { color: themes.light.Typography.main }) : '';
  return (
    <TypographyStyle id={id} className={`${type + ' ' + variant + ' ' + weight + ' ' + align}`} style={Object.assign(style ? style : '', typographyColor)}>
      {html ? (
        <div
          dangerouslySetInnerHTML={{
            __html: String(props.children),
          }}
        />
      ) : (
        <>{props.children}</>
      )}
    </TypographyStyle>
  );
});

export default { StyledTypography };
const TypographyStyle = styled.div`
  &.black {
    font-weight: 800 !important;
  }

  &.bold {
    font-weight: 700 !important;
  }

  &.medium {
    font-weight: 600 !important;
  }

  &.regular {
    font-weight: 400 !important;
  }

  &.body {
    line-height: 2.57;
  }

  &.title1 {
    line-height: 1;
    font-weight: 700;
  }

  &.title2 {
    line-height: 1.5;
    font-weight: 700;
  }

  &.quote {
    line-height: 2.38;
    font-weight: 700;
  }

  &.web30 {
    font-size: ${variables.typo30};
    font-weight: 700;
  }

  &.web20 {
    font-size: ${variables.typo20};
    font-weight: 700;
  }

  &.web16 {
    font-size: ${variables.typo16};
    font-weight: 700;
  }

  &.web14 {
    font-size: ${variables.typo14};
    font-weight: 400;
  }

  &.web12 {
    font-size: ${variables.typo12};
    font-weight: 400;
  }

  &.mobile12 {
    font-size: ${variables.typo12};
    font-weight: 700;
  }

  &.mobile10 {
    font-size: ${variables.typo10};
    font-weight: 700;
  }

  &.mobile9 {
    font-size: ${variables.typo9};
    font-weight: 400;
  }

  &.left {
    text-align: left !important;
  }

  &.center {
    text-align: center !important;
  }

  &.right {
    text-align: right !important;
  }
`;
