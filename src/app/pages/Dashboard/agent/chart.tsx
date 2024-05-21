import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export const Chart = (props) => {
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
          height: 250,
          // width:350
        },
        legend: {
          enabled: true,
          rtl: true,
          itemStyle: {
            color: '#A0A0A0',
          },
          format: '\u202B' + '{point.y}', // \u202B is RLE char for RTL support
          useHTML: true,
          reversed: false,
          pointFormat: '{point.y}{point.name}: <b><b></b>',
          align: 'left',
          squareSymbol: true,
          padding: 0,
          symbolWidth: 10,
          layout: 'horizontal',
          verticalAlign: 'middle',
          horizontal: 'middle',
          itemMarginBottom: 20,
          ItemMarginTop: 0,
          // symbolPadding: 0,
        },
        tooltip: {
          enabled: false,
          rtl: true,
          format: '\u202B' + '{point.y}', // \u202B is RLE char for RTL support
          useHTML: true,
          pointFormat: 'تعداد: {point.y}',
        },
        title: {
          text: '',
        },
        plotOptions: {
          pie: {
            colors: ['#433792', '#897fbb', '#302663', '#de74a3'],
            right: [100, '50%'],
            size: '100%',
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              pointFormat: '{point.y}',
              rtl: false,
              style: {
                fontSize: '0.6em',
              },
              useHTML: true,
              distance: -45,
              // filter: {
              //     property: 'percentage',
              //     operator: '>',
              //     value: 2,
              // },
            },
            showInLegend: true,
            format: '\u202B' + '{point.y}', // \u202B is RLE char for RTL support
            useHTML: true,
          },
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            innerSize: '10%',
            colorByPoint: true,
            data: props.chartData,
          },
        ],
      }}
    />
  );
};
