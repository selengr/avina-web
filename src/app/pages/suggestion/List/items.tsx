import { Card, CardActionArea, CardActions, CardContent, CardHeader, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button, Divide, Text } from 'components';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { Util } from 'utils';

export default function Items(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const deviceType = Util.ScreenSize();

  return (
    <Card variant='outlined'>
      <CardActionArea disableRipple={true} onClick={() => navigate(`/suggestion/info/?id=${props.item.id}`)}>
        <CardHeader
          sx={deviceType === 'mobile' ? { pt: '20px', pb: '1px', marginRight: '0px' } : { p: 1, marginRight: '7px' }}
          // sx={{ p: 1 }}
          title={
            <Text variant={'web14'} type={'title2'} weight={'bold'} align={'right'}>
              {props.item.name}
            </Text>
          }
          dir={'rtl'}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item container>
              <Divide />
            </Grid>
            <Grid
              item
              container
              style={deviceType === 'web' ? { height: 115 } : { height: 60 }}
              sx={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}>
              <Text variant={'web14'} type={'body'} weight={'regular'} align={'right'} style={{ color: '#6a6a6a' }}>
                {props.item.description}
              </Text>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ p: 1 }}>
          <Grid container>
            <Grid item container justifyContent={'left'} sx={deviceType === 'mobile' ? { mb: '3px', mt: '-25px', ml: '3px' } : { mb: '0px', mt: '0px', ml: '3px' }}>
              <Text variant={'web14'} type={'body'} weight={'regular'} style={{ color: '#353535' }}>
                {`${props.item.unit_price}${t(messages.Text_Global_Cost())} `}
              </Text>
            </Grid>
            <Grid item container>
              <Button
                color='primary'
                type={'outlined'}
                label={`${t(messages.Input_Global_AddToMyAssessment())}`}
                fullWidth={true}
                onClick={(event) => {
                  event.stopPropagation();
                  props.add(props.index);
                }}
              />
            </Grid>
          </Grid>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
