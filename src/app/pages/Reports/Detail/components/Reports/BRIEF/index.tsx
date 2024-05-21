import { useEffect, useState } from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import { Alert, Text } from 'components';
import ReportTextItem from '../../Items/ReportTextItem';
import { RadarChart } from '../../Charts/RadarChart';
import { BarChart } from '../../Charts/BarChart';
import { NormalChart } from '../../Charts/NormalChart';
import { StackedBarChart } from '../../Charts/StackedBar';
import { SmallPieChart } from '../../Charts/SmallPieChart';
import { LineCharts } from '../../Charts/LineChart';
import { DataTable } from '../../Charts/DataTable';

export function BriefReports(props) {
  const BRIEF = localStorage.Brief ? JSON.parse(localStorage.Brief) : [];
  const [briefData, setBriefData] = useState<any>([
    {
      briefTop: [],
      briefMiddle: [],
      briefBottom: [],
      briefWarn: [],
      briefTitle: [],
      briefNormalChart: [],
      briefMileChart: [],
      briefBarStackedChart: [],
      briefRadarChart: [],
      briefPieChart: [],
      briefLineChart: [],
      briefDataTableChart: [],
    },
  ]);
  const normalChart: any = localStorage.normalChart;
  const barChart: any = localStorage.barChart;
  const barNegChart: any = localStorage.barNegative;
  const radarChart: any = localStorage.radarChart;
  const pieChart: any = localStorage.pieChart;
  const dataTable: any = localStorage.dataTable;
  const lineChart: any = localStorage.lineChart;
  let brief: any[] = [];
  useEffect(() => {
    try {
      BRIEF.map((item, index) => {
        let temp = {};
        temp['briefTop'] = item.Top;
        temp['briefMiddle'] = item.Middle;
        temp['briefBottom'] = item.Bottom;
        temp['briefWarn'] = item.Warning;
        temp['briefTitle'] = item.Title[0];
        temp['briefNormalChart'] = item.NormalChart;
        temp['briefMileChart'] = item.MileChart;
        temp['briefBarStackedChart'] = item.BarStackedChart;
        temp['briefRadarChart'] = item.RadarChart;
        temp['briefPieChart'] = item.PieChart;
        temp['briefLineChart'] = item.LineChart;
        temp['briefDataTableChart'] = item.DataTableChart;
        brief.push(temp);
        console.log('warn', item.Warning);
      });
    } catch (e) {}
    setBriefData(brief);
  }, []);

  return (
    <>
      <Grid item container spacing={1}>
        <Grid item xs={12} sx={briefData.length >= 1 ? { display: 'none' } : { display: 'inline' }}>
          <Text variant={'web14'} weight={'bold'} html>
            گزارش مختصر
          </Text>
        </Grid>
      </Grid>
      {briefData.map((item: any, index: number) => {
        return (
          <>
            <Grid item container spacing={1}>
              {item.briefTitle && (
                <Grid item xs={12} sx={{ my: 3 }} key={index}>
                  <Text variant={'web14'} weight={'bold'} html>
                    {item.briefTitle.title}
                  </Text>
                </Grid>
              )}
            </Grid>
            {item.briefWarn.map((items: any, indexes: number) => {
              return (
                <Grid item xs={12}>
                  <Alert title={items.title} message={items.content} icon={'Alert'} severity={'warning'} />
                </Grid>
              );
            })}
            {item.briefTop.map((items: any, indexes: number) => {
              return (
                <>
                  <Grid item xs={12} key={indexes}>
                    <ReportTextItem accordionExpand={props.expander} accordion={props.childAccordion} item={items} />
                  </Grid>
                </>
              );
            })}
            {item.briefNormalChart !== undefined &&
              item.briefNormalChart.map((items: any, indexes: number) => {
                return (
                  <>
                    <Grid item xs={12} key={indexes}>
                      {normalChart === 'true' && <NormalChart item={items} />}
                    </Grid>
                  </>
                );
              })}
            {item.briefBarStackedChart !== undefined &&
              item.briefBarStackedChart.map((items: any, indexes: number) => {
                return (
                  <>
                    <Grid item xs={12} key={indexes}>
                      {barNegChart === 'true' && (
                        <Grid item container spacing={1}>
                          <Grid item xs={12}>
                            <Text variant={'web14'} weight={'bold'} html>
                              {items.title}
                            </Text>
                          </Grid>
                          <Grid item xs={12}>
                            <Card variant={'outlined'}>
                              <CardContent sx={{ mt: 2 }}>
                                <Grid container spacing={2}>
                                  {Object.values(items.content).map((item: any, i) => (
                                    <StackedBarChart key={i} left_text={item.left_text} right_text={item.right_text} left_value={item.left_value} right_value={item.right_value} />
                                  ))}
                                </Grid>
                              </CardContent>
                            </Card>
                          </Grid>
                        </Grid>
                      )}
                    </Grid>
                  </>
                );
              })}
            {item.briefMiddle.map((items: any, indexes: number) => {
              return (
                <>
                  <Grid item xs={12} key={indexes}>
                    <ReportTextItem accordionExpand={props.expander} accordion={props.childAccordion} item={items} />
                  </Grid>
                </>
              );
            })}
            {item.briefMileChart !== undefined &&
              item.briefMileChart.map((items: any, indexes: number) => {
                const barTemp: any = [];
                const barData: any = [];
                const barLabel: any = [];
                Object.entries(items.content).forEach(([key, value]) => {
                  barTemp.push(value);
                });
                barTemp.map((item) => {
                  barData.push(item.value);
                  barLabel.push(item.label);
                });
                return (
                  <>
                    <Grid item xs={12} key={indexes}>
                      {barChart === 'true' && <BarChart title={items} label={barLabel} value={barData} />}
                    </Grid>
                  </>
                );
              })}
            {item.briefRadarChart !== undefined &&
              item.briefRadarChart.map((items: any, indexes: number) => {
                return (
                  <>
                    <Grid item xs={12} key={indexes}>
                      {radarChart === 'true' && <RadarChart label={Object.keys(items.content)} value={Object.values(items.content)} />}
                    </Grid>
                  </>
                );
              })}
            {item.briefDataTableChart !== undefined &&
              item.briefDataTableChart.map((items: any, indexes: number) => {
                return (
                  <>
                    <Grid item xs={12} key={indexes}>
                      {dataTable === 'true' && <DataTable item={items} title={items} headers={items.content.headers} rows={items.content.rows} />}
                    </Grid>
                  </>
                );
              })}
            {item.briefPieChart !== undefined &&
              item.briefPieChart.map((items: any, indexes: number) => {
                return (
                  <>
                    <Grid item xs={12} key={indexes}>
                      {pieChart === 'true' && (
                        <Grid item xs={12}>
                          <Card variant={'outlined'}>
                            <CardContent>
                              <Grid container>
                                {Object.values(items.content).map((item, index) => (
                                  <SmallPieChart key={index} index={index} item={item} />
                                ))}
                              </Grid>
                            </CardContent>
                          </Card>
                        </Grid>
                      )}
                    </Grid>
                  </>
                );
              })}
            {item.briefLineChart !== undefined &&
              item.briefLineChart.map((items: any, indexes: number) => {
                return (
                  <>
                    <Grid item xs={12} key={indexes}>
                      {lineChart === 'true' && (
                        <Grid item xs={12}>
                          <Card variant={'outlined'}>
                            <CardContent>
                              <Grid container>
                                {Object.values(items.content).map((item, index) => {
                                  return <LineCharts key={index} item={item} />;
                                })}
                              </Grid>
                            </CardContent>
                          </Card>
                        </Grid>
                      )}
                    </Grid>
                  </>
                );
              })}
            {item.briefBottom.map((items: any, indexes: number) => {
              return (
                <>
                  <Grid item xs={12} key={indexes}>
                    <ReportTextItem accordionExpand={props.expander} accordion={props.childAccordion} item={items} />
                  </Grid>
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
}
