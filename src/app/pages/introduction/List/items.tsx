import { Card, CardActionArea, CardContent, CardHeader, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Divide, Text } from 'components';
import { Util } from 'utils';

export default function Items(props) {
  const navigate = useNavigate();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();

  return (
    <Card variant='outlined'>
      <CardActionArea disableRipple={true} onClick={() => navigate(`/introduction/info/?id=${props.item.id}`)}>
        <CardHeader
          sx={deviceType === 'mobile' ? { pt: 1, mt: 0, height: 50 } : { p: 1, mt: 1, height: 50 }}
          title={
            <Text variant={fontSize} type={'title2'} weight={'bold'} align={'right'} style={deviceType === 'mobile' ? { marginRight: '0' } : { marginRight: '7px' }}>
              {props.item.name}
            </Text>
          }
          dir={'rtl'}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item container sx={deviceType === 'mobile' ? { mb: '-15px', mt: '-15px' } : { mb: '-10px', mt: '-10px' }}>
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
              <Text variant={deviceType === 'web' ? 'web14' : 'mobile10'} type={'body'} weight={'regular'} align={'right'} style={{ color: '#6a6a6a' }}>
                {props.item.description}
              </Text>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
