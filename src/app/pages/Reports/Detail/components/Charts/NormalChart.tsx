import { Card, CardContent, Container, Grid } from '@mui/material';
import { Text } from 'components';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';

export function NormalChart(props) {
  const data = [-25, 0, 25];
  const x = props.item.current;
  const normalChartOptions = {
    config: {
      title: {
        text: Math.round(props.item.current) + '%',
        y: 130,
      },
      chart: {
        backgroundColor: 'transparent',
        reflow: false,
        height: 300 + 'PX',
      },
      legend: {
        enabled: false,
      },
      xAxis: [
        {
          title: {
            text: 'Data',
          },
          visible: false,
          alignTicks: false,
        },
        {
          title: {
            text: 'Bell curve',
          },
          alignTicks: false,
          opposite: false,
          visible: false,
          tickInterval: 1,
          border: 2,
        },
        {
          min: 0,
          max: 100,
          type: 'category',
          uniqueNames: false,
          tickInterval: 25,
        },
      ],
      tooltip: {
        enabled: false,
      },
      yAxis: [
        {
          title: {
            text: 'Data',
          },
          visible: false,
        },
        {
          title: {
            text: 'Bell curve',
          },
          opposite: false,
          visible: false,
        },
      ],
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Bell curve',
          type: 'bellcurve',
          xAxis: 1,
          yAxis: 1,
          pointsInInterval: 4,
          intervals: 4,
          baseSeries: 1,
          marker: {
            enabled: false,
          },
          zoneAxis: 'x',
          zones: [
            {
              fillColor: 'transparent',
              value: -100,
            },
            {
              fillColor: '#e9c46a',
              // value: current
              value: x * 2 - 100,
            },
            {
              fillColor: 'transparent',
            },
          ],
          fillColor: {
            fillColor: '#e9c46a',
          },
          animation: {
            duration: 1000,
          },
        },
        {
          name: 'Data',
          type: 'scatter',
          data: data,
          visible: false,
          marker: {
            radius: 1.5,
          },
        },
      ],
      plotOptions: {
        series: {
          color: '#f4a261',
        },
        area: {
          enableMouseTracking: true,
          // color: 'rgb(226, 119, 122)',
          // fillColor: 'rgba(226, 119, 122, 0.5)',
          zoneAxis: 'x',
          zones: [
            {
              fillColor: 'transparent',
              value: 0,
            },
            {
              value: props.item.current - 50,
            },
            {
              fillColor: 'transparent',
            },
          ],
        },
      },
    },
  };

  return (
    <Grid item container spacing={1}>
      <Grid item xs={12}>
        <Text variant={'web14'} weight={'bold'}>
          {props.item.title}
        </Text>
      </Grid>
      <Grid item xs={12}>
        <Card variant={'outlined'}>
          <Container maxWidth={'xl'}>
            <CardContent>
              <HighchartsReact constructorType={'chart'} highcharts={Highcharts} options={normalChartOptions.config} />
              <Grid container>
                <Grid item xs={6}>
                  <Text variant={'mobile-10'} align={'right'}>
                    {props.item.content ? props.item.content.labels.right : ''}
                  </Text>
                </Grid>
                <Grid item xs={6}>
                  <Text variant={'mobile-10'} align={'left'}>
                    {props.item.content ? props.item.content.labels.left : ''}
                  </Text>
                </Grid>
              </Grid>
            </CardContent>
          </Container>
        </Card>
      </Grid>
    </Grid>
  );
}
