import { memo } from 'react';
import styled from 'styled-components/macro';
import { Card } from '@mui/material';

export const StyledCard = memo(() => {
  return <CardStyle />;
});

export default { StyledCard };
const CardStyle = styled(Card)``;
