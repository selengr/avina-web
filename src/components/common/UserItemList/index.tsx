import { Card, Grid } from '@mui/material';
import { Checkbox, Text } from 'components';
import { messages } from '../../messages';
import { useTranslation } from 'react-i18next';
import { Util } from 'utils';

type Props = {
  children: string;
  variant: any;
};

export const Details = ({ children, variant }: Props) => {
  return (
    <Grid item md={6}>
      <Text style={{ textAlign: 'center' }} variant={variant === 'mobile' ? 'mobile10' : 'web14'}>
        {children}
      </Text>
    </Grid>
  );
};

export const UserListItem = (props) => {
  const { t } = useTranslation();
  const deviceType = Util.ScreenSize();

  // @ts-ignore
  // @ts-ignore
  return (
    <Card variant='outlined' style={{ padding: '10px' }}>
      <Grid container alignItems={'center'}>
        <Grid item md={6}>
          <Checkbox
            checked={props.checked}
            onChange={() => props.checkItems(props.item)}
            labelStyle={deviceType === 'mobile' ? { paddingRight: '0' } : { paddingRight: '16px' }}
            id={props.item.id}
            label={props.item.name}
            weight={'bold'}
          />
        </Grid>
        <Grid item container md={6} justifyContent={'space-around'}>
          <Details variant={deviceType}>
            {props.item.sex ? (props.item.sex === 1 ? `${t(messages.Input_Global_Male())}` : `${t(messages.Input_Global_Female())}`) : `${t(messages.Input_ComponentsCommonUserItemList_Undefined())}`}
          </Details>
          <Details variant={deviceType}>{`${props.item.age} ${t(messages.Input_Global_Year())} `}</Details>
        </Grid>
      </Grid>
    </Card>
  );
};

export default UserListItem;
