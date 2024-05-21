import { Card, CardContent, Grid } from '@mui/material';
import Highcharts from 'highcharts/highstock';
import LineChart from 'highcharts-react-official';

export function LineCharts(props) {
  return (
    <Grid item container spacing={1}>
      <Grid item xs={12} sx={{ my: 1 }}>
        <Card variant={'outlined'}>
          <CardContent>
            {/*<Text variant={'web14'} weight={'bold'} html>*/}
            {/*  {props.item.title}*/}
            {/*</Text>*/}
            <LineChart
              id={props.index}
              style={{ zIndex: -1 }}
              highcharts={Highcharts}
              options={{
                title: {
                  text: props.item.title,
                },
                chart: {
                  backgroundColor: 'transparent',
                  type: 'line',
                  reflow: false,
                  height: 350 + 'PX',
                },
                pane: [
                  {
                    startAngle: -45,
                    endAngle: 45,
                    background: null,
                    center: ['50%', '50%'],
                    size: 300,
                  },
                  {
                    startAngle: -45,
                    endAngle: 45,
                    background: null,
                    center: ['75%', '145%'],
                    size: 300,
                  },
                ],
                xAxis: {
                  labels: {
                    align: 'center',
                    reserveSpace: true,
                    useHTML: true,
                  },
                  reversed: false,
                  itemStyle: {
                    color: 'gray',
                  },
                  categories: props.item.categories,
                },
                yAxis: {
                  min: -30,
                  max: 30,
                  title: {
                    text: '',
                  },
                  gridLineWidth: 0.1,
                  opposite: false,
                  reversed: false,
                },
                tooltip: {
                  enabled: false,
                  rtl: true,
                  format: '\u202B' + '{point.name}' + '{y} %', // \u202B is RLE char for RTL support
                  useHTML: true,
                },
                legend: {
                  enabled: false,
                },
                plotOptions: {
                  line: {
                    dataLabels: {
                      enabled: true,
                      style: {
                        fontWeight: 'bold',
                        color: 'gray',
                        textOutline: 'transparent',
                        direction: 'ltr',
                      },
                    },
                  },
                  column: {
                    pointPadding: 0,
                    borderWidth: 0.1,
                  },
                  series: {
                    stacking: 'normal',
                  },
                },
                credits: {
                  enabled: false,
                },
                series: [
                  {
                    colorByPoint: true,
                    data: props.item.data,
                  },
                ],
                responsive: {
                  rules: [
                    {
                      condition: {
                        maxWidth: 500,
                        height: 1300,
                      },
                      chartOptions: {
                        legend: {
                          align: 'center',
                          verticalAlign: 'bottom',
                          layout: 'horizontal',
                        },
                        yAxis: {
                          labels: {
                            align: 'left',
                            x: 0,
                            y: -5,
                          },
                          title: {
                            text: null,
                          },
                        },
                        subtitle: {
                          text: null,
                        },
                        credits: {
                          enabled: false,
                        },
                      },
                    },
                  ],
                },
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
