import { memo } from 'react';
import styled from 'styled-components/macro';
import { themes } from 'styles/theme/colors';

interface Props {
  style?: any;
}

export const StyledDivider = memo(({ style }: Props) => {
  return <Div style={style} />;
});

export default { StyledDivider };
const Div = styled.div`
  height: 1px;
  width: 30px;
  border: 1.5px solid ${themes.light.Secondary.main};
  background-color: ${themes.light.Secondary.main};
  border-radius: 2px;
  @media only screen and (max-width: 600px) {
    width: 20px;
  }
`;
