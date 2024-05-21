import { memo } from 'react';
import styled from 'styled-components/macro';
import { StyledTypography as Typography } from '../Typography';
import { StyledDivider as Divider } from '../Divider';
import { Grid } from '@mui/material';
import { Util } from 'utils';

interface Props {
  value: any;
}

export const TitleCard = memo(({ value }: Props) => {
  const deviceType = Util.ScreenSize();
  return (
    <Grid container alignItems={'center'}>
      <Typography variant={deviceType === 'mobile' ? 'mobile12' : 'web16'} weight={'bold'}>
        {value}
      </Typography>
      <Div>
        <Divider style={deviceType === 'mobile' ? { display: 'none' } : { display: 'inline-block' }} />
      </Div>
    </Grid>
  );
});

export default { TitleCard };
const Div = styled.div`
  margin: 10.5px 2.5px;

  @media only screen and (max-width: 600px) {
    margin: 8.5px 2.5px;
  }
`;
