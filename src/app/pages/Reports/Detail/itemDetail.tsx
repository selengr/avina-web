import { Grid } from '@mui/material';
import { Text } from 'components';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

declare const variants: [`age`, `quantity`];

interface Props {
  title?: string;
  value?: number | string;
  variant?: (typeof variants)[number];
}

export const ItemDetail = ({ title, value, variant }: Props) => {
  const { t } = useTranslation();
  return (
    <Grid item container justifyContent={'space-between'}>
      <Grid item>
        <Text variant={'web14'} weight={'regular'}>
          {title}
        </Text>
      </Grid>
      <Grid item>
        <Text variant={'web14'} weight={'bold'}>
          {Math.round(Number(value))}
          {variant === 'age' && `${t(messages.Input_Global_Year())}`}
          {variant === 'quantity' && `${t(messages.ItemDetail_ReportsDetail_Quantity())}`}
        </Text>
      </Grid>
    </Grid>
  );
};
