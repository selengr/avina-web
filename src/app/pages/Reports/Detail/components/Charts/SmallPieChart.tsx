import { CardContent, Grid } from '@mui/material';
import PieChart from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';

export function SmallPieChart(props) {
  return (
    <Grid item xs={6}>
      <CardContent>
        <PieChart
          id={props.index}
          style={{ zIndex: -1 }}
          highcharts={Highcharts}
          options={{
            chart: {
              plotBackgroundColor: null,
              plotBorderWidth: 0,
              plotShadow: false,
              backgroundColor: 'transparent',
              height: 250,
              type: 'pie',
            },
            legend: {
              enabled: true,
              rtl: true,
              itemStyle: {
                color: '#A0A0A0',
              },
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal',
              x: 0,
              y: 10,
              format: '\u202B' + '{point.name}', // \u202B is RLE char for RTL support
              useHTML: true,
              reversed: true,
            },
            colorAxis: {
              min: 20,
              max: 90,
              visible: false,
            },
            tooltip: {
              enabled: false,
              rtl: true,
              format: '\u202B' + '{point.name}' + '{y} %', // \u202B is RLE char for RTL support
              useHTML: true,
              // pointFormat: '{point.percentage}%'
            },
            title: {
              text: '',
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                  enabled: true,
                  // pointFormat: '{point.name}: <b><b>%{point.percentage}</b>',
                  format: '{y} %',
                  rtl: false,
                  useHTML: true,
                  distance: -35,
                  percentageDecimals: 0,

                  filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 2,
                    valueDecimals: 1,
                  },
                },
                showInLegend: true,
                format: '\u202B' + '{point.name}', // \u202B is RLE char for RTL support
                useHTML: true,
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '80%'],
                size: '100%',
              },
            },
            credits: {
              enabled: false,
            },
            series: [
              {
                innerSize: '35%',
                colorKey: 'colorValue',
                data: [
                  {
                    // right
                    name: props.item.right_text,
                    y: Math.round(parseInt(props.item.right_value) * 100) / 100,
                    colorValue: parseInt(props.item.right_value),
                    useHTML: true,
                  },
                  {
                    // left
                    name: props.item.left_text,
                    y: Math.round(parseInt(props.item.left_value) * 100) / 100,
                    colorValue: parseInt(props.item.left_value),
                    useHTML: true,
                  },
                ],
              },
            ],
          }}
        />
      </CardContent>
    </Grid>
  );
}
