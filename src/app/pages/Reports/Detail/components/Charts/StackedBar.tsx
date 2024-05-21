import { styled } from '@mui/material/styles';
import { Grid, Slider } from '@mui/material';
import { Text } from 'components';

const StackedBar = styled(Slider)({
  '&.Mui-disabled': {
    color: '#31B7AE',
  },
  height: 11,
  '& .MuiSlider-track': {
    height: 15,
    width: 0,
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 0,
    width: 0,
    backgroundColor: 'transparent',
    border: '0px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    color: '#392f5a',
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 25,
    height: 25,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#31B7AE55',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

export function StackedBarChart(props) {
  return (
    <Grid item container spacing={1} direction='row-reverse' justifyContent='center' alignItems='center'>
      <Grid item xs={1}>
        <Text variant={'web12'} weight={'medium'} style={{ color: 'gray' }}>
          {props.left_text}
        </Text>
      </Grid>
      <Grid item xs={10}>
        <StackedBar disabled min={-11} max={11} scale={(v) => Math.abs(v)} defaultValue={[parseInt(props.left_value) * -1, props.right_value]} valueLabelDisplay='on' />
      </Grid>
      <Grid item xs={1}>
        <Text variant={'web12'} weight={'medium'} align={'left'} style={{ color: 'gray' }}>
          {props.right_text}
        </Text>
      </Grid>
    </Grid>
  );
}
