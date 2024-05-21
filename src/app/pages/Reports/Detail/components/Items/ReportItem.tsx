import { Card, CardContent, Grid } from '@mui/material';
import { Text } from 'components';
import ReportTextItem from './ReportTextItem';
import UpperLowerItem from './UpperLowerItem';
import { DonutChart } from '../Charts/DonutChart';

export default function ReportItem(props) {
  return (
    <>
      {props.top[0] && (
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Text variant={'web14'} weight={'bold'} html>
              {props.itemTitle.length >= 1 ? props.itemTitle[0].title : ''}
            </Text>
          </Grid>
          {props.top.map((item, i) => (
            <Grid item xs={12} key={i}>
              <ReportTextItem accordionExpand={props.expander} accordion={props.childAccordion} item={item} />
            </Grid>
          ))}
          {props.chartOption === 'true' && (
            <Grid item xs={12}>
              <Card variant={'outlined'}>
                <CardContent sx={{ paddingBottom: '16px !important' }}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Text variant={'web14'} weight={'bold'} html>
                        {props.pieTitle.title ? props.pieTitle.title : ''}
                      </Text>
                    </Grid>
                    <Grid item xs={12}>
                      <DonutChart data={props.chartData} />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          )}
          {props.middle && (
            <>
              {props.middle.map((item, i) => (
                <Grid item xs={12} key={i}>
                  <ReportTextItem accordionExpand={props.expander} accordion={props.childAccordion} item={item} />
                </Grid>
              ))}
            </>
          )}
          {props.bottom && (
            <>
              {props.bottom.map((item, i) => (
                <Grid item xs={12} key={i}>
                  <ReportTextItem accordionExpand={props.expander} accordion={props.childAccordion} item={item} />
                </Grid>
              ))}
            </>
          )}
          {props.segment && (
            <>
              {props.segment.map((item, i) => (
                <Grid item xs={12} key={i}>
                  <ReportTextItem accordionExpand={props.expander} accordion={props.childAccordion} item={item} />
                </Grid>
              ))}
            </>
          )}
          {props.Position[1] && (
            <Grid item xs={12}>
              <Card variant={'outlined'}>
                <CardContent>
                  <UpperLowerItem accordionExpand={props.expander} accordion={props.childAccordion} item={props.Position[1]} />
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
}
