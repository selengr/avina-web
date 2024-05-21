import * as React from 'react';
import { memo } from 'react';
import styled from 'styled-components/macro';
import { Util } from 'utils';

type Props = {
  children: React.ReactNode;
};
export const StyledCardContainer = memo((props: Props) => {
  const deviceType = Util.ScreenSize();
  return <CardStyle style={deviceType === 'mobile' ? { padding: '15px' } : { padding: '20px' }}>{props.children}</CardStyle>;
});

export default { StyledCardContainer };
const CardStyle = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.054);
`;
