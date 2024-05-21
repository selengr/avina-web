import { Card, CardActionArea, CardContent, CardHeader, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button, Divide, Text } from 'components';
import { Util } from 'utils';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

export default function PackageItems(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();

  return (
    <Card variant='outlined'>
      <CardActionArea disableRipple={true} onClick={() => navigate(`/introduction/info/?id=${props.item.id}`)}>
        <CardHeader
          sx={{ p: 1 }}
          title={
            <Text variant={fontSize} type={'title2'} weight={'bold'} align={'right'} style={{ marginRight: '7px' }}>
              {props.item.name}
            </Text>
          }
          dir={'rtl'}
        />
        <CardContent sx={{ pb: '16px !important' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Divide />
            </Grid>
            <Grid
              item
              xs={12}
              style={deviceType === 'web' ? { height: 115 } : { height: 60 }}
              sx={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}>
              <Text variant={deviceType === 'web' ? 'web14' : 'mobile9'} type={'body'} weight={'regular'} align={'right'} style={{ color: '#6a6a6a' }}>
                {props.item.description}
              </Text>
            </Grid>
            <Grid item xs={12}>
              <Text variant={fontSize} weight={'medium'} align={'left'}>
                {props.item.unit_price} {t(messages.Text_Global_Cost())}
              </Text>
            </Grid>
            <Grid item xs={12}>
              <Button
                type={'outlined'}
                label={`${t(messages.Input_Global_AddToCart())}`}
                fullWidth={true}
                onClick={(e) => {
                  e.stopPropagation();
                  props.order(props.item.id);
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
