import { Card, CardContent, Grid } from '@mui/material';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';

export function RadarChart(props) {
  const radarChartOptions = {
    chart: {
      backgroundColor: 'transparent',
      polar: true,
      height: 485 + 'px',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: '',
    },
    pane: {
      startAngle: 0,
      endAngle: 360,
    },
    xAxis: {
      gridLineDashStyle: 'dash',
      reversed: false,
      categories: props.label,
      lineWidth: 1,
      labels: {
        style: {
          color: '#A0A0A0',
          fontSize: '10px',
        },
        format: '{value}',
        pointFormat: '\u202B' + '{point.name}%', // \u202B is RLE char for RTL support
        useHTML: true,
        rtl: true,
      },
    },
    yAxis: {
      lineWidth: 0,
      min: 0,
      max: 101,
      gridLineDashStyle: 'dot',
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      enabled: false,
      itemStyle: {
        color: '#A0A0A0',
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        groupPadding: 0,
      },
      series: {
        colorByPoint: true,
        dataLabels: {
          enabled: true,
          pointFormat: '{point.y}%',
          style: {
            fontWeight: 'bold',
            textOutline: 'transparent',
          },
        },
      },
    },
    series: [
      {
        name: '',
        type: 'area',
        data: props.value,
        pointPlacement: 'on',
        rtl: true,
        format: '\u202B' + '{point.name}%', // \u202B is RLE char for RTL support
        useHTML: true,
      },
    ],
  };
  return (
    <Grid item xs={12}>
      <Card variant={'outlined'}>
        <CardContent>
          <HighchartsReact style={{ zIndex: -1 }} highcharts={Highcharts} options={radarChartOptions} />
        </CardContent>
      </Card>
    </Grid>
  );
}
