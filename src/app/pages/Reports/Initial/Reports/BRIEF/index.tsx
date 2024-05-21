export function BriefReport(props) {
  let briefArrValueTitle: any[] = [];
  let briefArrValueTextTop: any[] = [];
  let briefArrValueTextMiddle: any[] = [];
  let briefArrValueTextBottom: any[] = [];

  let briefArrValueNormal: any[] = [];
  let briefArrValueMile: any[] = [];
  let briefArrValueBarStacked: any[] = [];
  let briefArrValueRadar: any[] = [];
  let briefArrValuePie: any[] = [];
  let briefArrValueLine: any[] = [];
  let briefArrValueDataTable: any[] = [];

  let briefContent: any = [];
  let briefArrValueWarning: any[] = [];

  if (props.brief) {
    // Briefs
    // const briefArrKey = [];
    const briefArrValue: any[] = [];
    const parent: any[] = [];
    if (props.brief.transactionalLeadership == undefined && props.brief.transformationalLeadership == undefined) {
      parent.push(props.brief);
    } else {
      parent.push(props.brief.transactionalLeadership);
      parent.push(props.brief.transformationalLeadership);
    }

    Object.entries<any>(parent).forEach(([parentKey, parentValue]) => {
      let briefSegment = 1;
      Object.entries<any>(parentValue).forEach(([key, value]) => {
        // briefArrKey.push(key);
        briefArrValue.push(value);
        if (value.presentation === 'text') {
          switch (briefSegment) {
            case parentValue.l0 ? 2 : 1:
              briefArrValueTextTop.push(value);
              break;
            case parentValue.l0 ? 3 : 2:
              briefArrValueTextMiddle.push(value);
              break;
            case parentValue.l0 ? 4 : 3:
              briefArrValueTextBottom.push(value);
              break;
            default:
              break;
          }
        } else {
          briefSegment++;
        }

        if (value.presentation === 'title') {
          briefArrValueTitle.push(value);
        }

        if (value.presentation === 'warning') {
          briefArrValueWarning.push(value);
        }

        // briefArrValueMile = briefArrValue.filter((element) => element.presentation === 'mile');
        if (value.presentation === 'mile') {
          briefArrValueMile.push(value);
        }
        if (briefArrValueMile.length >= 1) {
          localStorage.setItem('barChart', 'true');
        } else {
          localStorage.setItem('barChart', 'false');
        }
        // briefArrValueBarStacked = briefArrValue.filter((element) => element.presentation === 'barNegative');
        if (value.presentation === 'barNegative') {
          briefArrValueBarStacked.push(value);
        }
        if (briefArrValueBarStacked.length >= 1) {
          localStorage.setItem('barNegative', 'true');
        } else {
          localStorage.setItem('barNegative', 'false');
        }

        // briefArrValueNormal = briefArrValue.filter((element) => element.presentation === 'normal');
        if (value.presentation === 'normal') {
          briefArrValueNormal.push(value);
        }
        if (briefArrValueNormal.length >= 1) {
          localStorage.setItem('normalChart', 'true');
        } else {
          localStorage.setItem('normalChart', 'false');
        }

        // briefArrValuePie = briefArrValue.filter((element) => element.presentation === 'pie');
        if (value.presentation === 'pie') {
          briefArrValuePie.push(value);
        }
        if (briefArrValuePie.length >= 1) {
          localStorage.setItem('pieChart', 'true');
        } else {
          localStorage.setItem('pieChart', 'false');
        }

        // briefArrValueDataTable = briefArrValue.filter((element) => element.presentation === 'table');
        if (value.presentation === 'table') {
          briefArrValueDataTable.push(value);
        }
        if (briefArrValueDataTable.length >= 1) {
          localStorage.setItem('dataTable', 'true');
        } else {
          localStorage.setItem('dataTable', 'false');
        }

        // briefArrValueLine = briefArrValue.filter((element) => element.presentation === 'lineChart');
        if (value.presentation === 'lineChart') {
          briefArrValueLine.push(value);
        }
        if (briefArrValueLine.length >= 1) {
          localStorage.setItem('lineChart', 'true');
        } else {
          localStorage.setItem('lineChart', 'false');
        }

        // briefArrValueRadar = briefArrValue.filter((element) => element.presentation === 'radar');
        if (value.presentation === 'radar') {
          briefArrValueRadar.push(value);
        }
        if (briefArrValueRadar.length >= 1) {
          localStorage.setItem('radarChart', 'true');
        } else {
          localStorage.setItem('radarChart', 'false');
        }
      });
      JSON.stringify(briefArrValueNormal[0]) && localStorage.setItem('normalChartData', JSON.stringify(briefArrValueNormal[0]) ? JSON.stringify(briefArrValueNormal[0]) : JSON.stringify([]));
      JSON.stringify(briefArrValueMile[0]) && localStorage.setItem('barChartData', JSON.stringify(briefArrValueMile[0]) ? JSON.stringify(briefArrValueMile[0]) : JSON.stringify([]));
      JSON.stringify(briefArrValueBarStacked[0]) &&
        localStorage.setItem('barNegativeChartData', JSON.stringify(briefArrValueBarStacked[0]) ? JSON.stringify(briefArrValueBarStacked[0]) : JSON.stringify([]));
      JSON.stringify(briefArrValueRadar[0]) && localStorage.setItem('radarChartData', JSON.stringify(briefArrValueRadar[0]) ? JSON.stringify(briefArrValueRadar[0]) : JSON.stringify([]));
      JSON.stringify(briefArrValuePie[0]) && localStorage.setItem('pieChartData', JSON.stringify(briefArrValuePie[0]) ? JSON.stringify(briefArrValuePie[0]) : JSON.stringify([]));
      JSON.stringify(briefArrValueLine[0]) && localStorage.setItem('lineChartData', JSON.stringify(briefArrValueLine[0]) ? JSON.stringify(briefArrValueLine[0]) : JSON.stringify([]));
      JSON.stringify(briefArrValueDataTable[0]) && localStorage.setItem('tableChartData', JSON.stringify(briefArrValueDataTable[0]) ? JSON.stringify(briefArrValueDataTable[0]) : JSON.stringify([]));

      if (props.l1) {
        localStorage.setItem('taskReportTitle', props.l1.title);
        localStorage.setItem('taskReportContent', props.l1.content);
        if (props.condition !== null) {
          localStorage.setItem('taskReportConditionTitle', props.condition.title);
          localStorage.setItem('taskReportConditionContent', props.condition.content);
        }
      }

      briefContent.push({
        Title: briefArrValueTitle,
        Top: briefArrValueTextTop,
        Middle: briefArrValueTextMiddle,
        Bottom: briefArrValueTextBottom,
        Warning: briefArrValueWarning,
        NormalChart: briefArrValueNormal,
        MileChart: briefArrValueMile,
        BarStackedChart: briefArrValueBarStacked,
        RadarChart: briefArrValueRadar,
        PieChart: briefArrValuePie,
        LineChart: briefArrValueLine,
        DataTableChart: briefArrValueDataTable,
      });

      JSON.stringify(briefContent) && localStorage.setItem('Brief', JSON.stringify(briefContent));

      briefArrValueTitle = [];
      briefArrValueTextTop = [];
      briefArrValueTextMiddle = [];
      briefArrValueTextBottom = [];
      briefArrValueWarning = [];
      briefArrValueNormal = [];
      briefArrValueMile = [];
      briefArrValueBarStacked = [];
      briefArrValueRadar = [];
      briefArrValuePie = [];
      briefArrValueLine = [];
      briefArrValueDataTable = [];
      // briefContent = [];
    });
  }
}
