import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';

interface Props {
  data?: any;
}

export const DonutChart = ({ data }: Props) => {
  return (
    <HighchartsReact
      constructorType={'chart'}
      highcharts={Highcharts}
      options={{
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false,
          backgroundColor: 'transparent',
          type: 'pie',
        },
        legend: {
          enabled: true,
          rtl: true,
          itemStyle: {
            color: '#A0A0A0',
          },
          format: '\u202B' + '{point.name}', // \u202B is RLE char for RTL support
          useHTML: true,
          reversed: false,
          pointFormat: '{point.name}: <b><b>{point.y}</b>',
        },
        tooltip: {
          enabled: true,
          rtl: true,
          format: '\u202B' + '{point.name}', // \u202B is RLE char for RTL support
          useHTML: true,
          pointFormat: 'تعداد: {point.y}',
        },
        title: {
          text: '',
        },
        plotOptions: {
          pie: {
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              pointFormat: '{point.name}: <b><b>{point.y}</b>',
              rtl: false,
              useHTML: true,
              distance: -45,
              filter: {
                property: 'percentage',
                operator: '>',
                value: 2,
              },
            },
            showInLegend: true,
            format: '\u202B' + '{point.name}', // \u202B is RLE char for RTL support
            useHTML: true,
          },
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            innerSize: '50%',
            colorByPoint: true,
            data: data,
          },
        ],
      }}
    />
  );
};
