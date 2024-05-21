import { Card, CardContent, Grid } from '@mui/material';
import { Text } from 'components';

export const Box = (props) => {
  return (
    <Grid item xs={12} lg={6}>
      <Card sx={{ border: '3px dashed #cdcdcd' }}>
        <CardContent sx={{ pb: '16px !important' }}>
          <Grid container justifyContent={'center'} spacing={3}>
            <Grid item xs={12}>
              <Text
                style={{
                  lineHeight: '35px',
                  textAlign: 'center',
                  color: '#6a6a6a',
                  height: '15vh',
                }}
                variant={'web14'}>
                {props.title}
              </Text>
            </Grid>
            <Grid item>{props.children}</Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
