import { memo } from 'react';
import styled from 'styled-components/macro';
import { themes } from 'styles/theme/colors';
import { Text } from 'components';
import { Box, circularProgressClasses, Grid, LinearProgress, linearProgressClasses } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

interface Props {
  percent: number;
  animate?: boolean;
}

export const StyledProgressCircle = memo(({ percent, animate }: Props) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant='determinate'
        sx={{
          color: (theme) => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={42}
        thickness={6}
        value={100}
      />
      <CircularProgress
        value={percent}
        thickness={6}
        size={42}
        variant={animate ? 'indeterminate' : 'determinate'}
        sx={{
          animationDuration: '1000ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text variant='mobile9' weight={'bold'} style={{ color: `${themes.light.Typography.Secondary}` }}>
          {`${Math.round(percent)}%`}
        </Text>
      </Box>
    </Box>
  );
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 6,
  direction: 'rtl',
  transform: 'rotate(180deg)',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'rgb(230 229 236)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 6,
    backgroundColor: '#DE74A3',
  },
}));

export const StyledProgressLine = memo(({ percent }: Props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <BorderLinearProgress variant='determinate' value={percent} />
      </Grid>
    </Grid>
  );
});
