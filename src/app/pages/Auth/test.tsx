import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import React from 'react';

const Abbas = () => {
  const param = () => new URLSearchParams(useLocation().search);
  const lastparam = param();
  const myState: any = lastparam.get('state');
  const myCode: any = lastparam.get('code');

  alert('code:' + myCode + 'mystate:' + myState);

  return (
    <Grid>
      {/*<Grid key={i} height={78} item xs={12}>
    <Card variant='outlined'>
      <CardContent style={{padding: '15px',}}>
        <Grid container spacing={1} justifyContent={''}
          // sx={deviceType === 'mobile' ? {marginBottom:'20px'}: {marginBottom:'0px'}}
              sx={{backgroundColor:'green'}}
              alignItems={'center'}>
          <Grid item xs={4} sx={{backgroundColor:'blue'}}>
            <Text
              style={deviceType === 'mobile' ? {paddingRight: '0'} : {paddingRight: '16px'}}
              variant={'web14'} weight={'bold'}>
              {item.questionnaire_name}
            </Text>
          </Grid>
          <Grid item container xs={4} spacing={deviceType ==='mobile'? 0 :10}
            // style={deviceType ==='mobile' ? {backgroundColor:'red',display:'flex', flexDirection:'row',justifyContent:'space-between', alignItems:'center'} : {}}
          >
            <Grid item>
              <Text variant={'web14'} weight={'regular'}>
                {item.user_name}
              </Text>
            </Grid>
            <Grid item>
              <Text variant={fontSize} weight={'regular'}>
                {item.finishing_time}
              </Text>
            </Grid>
          </Grid>
          <Grid item container xs={4} spacing={1}
                sx={deviceType ==='mobile' ? {display:'none'} :{display:''}}
                justifyContent={'flex-end'} alignItems={'center'}>
            <Grid item>
              <Button type={'outlined'} label={'گزارش مختصر'}
                      onClick={() => reportDataSet('brief', item.assessment_id, item.questionnaire_id, item.test_id)}/>
            </Grid>
            <Grid item>
              <Button type={'outlined'} label={'گزارش تفصیلی'}
                      onClick={() => reportDataSet('full', item.assessment_id, item.questionnaire_id, item.test_id)}/>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Grid>*/}
    </Grid>
  );
};

export default Abbas;
