import { Card, CardContent, Container, Grid } from '@mui/material';
import { Text } from 'components';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';

export function BarChart(props) {
  const barChartOptions = {
    title: {
      text: '',
    },
    chart: {
      backgroundColor: 'transparent',
      type: 'bar',
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
      categories: props.label,
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: '',
      },
      gridLineWidth: 0.1,
      opposite: false,
      reversed: false,
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0.1,
      },
      series: {
        stacking: 'normal',
      },
      bar: {
        dataLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            textOutline: 'transparent',
          },
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        colorByPoint: true,
        data: props.value,
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
  };

  return (
    <Grid item container spacing={1}>
      <Grid item xs={12}>
        <Text variant={'web14'} weight={'bold'}>
          {props.title.title}
        </Text>
      </Grid>
      <Grid item xs={12}>
        <Card variant={'outlined'}>
          <CardContent>
            <Container maxWidth={'xl'}>
              <HighchartsReact highcharts={Highcharts} options={barChartOptions} constructorType={'chart'} />
            </Container>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
