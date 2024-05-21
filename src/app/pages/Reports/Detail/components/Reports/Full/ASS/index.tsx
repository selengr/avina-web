import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function ASSReport(props) {
  const collectivePieChart: any[] = localStorage.collectivePieChart;

  const collectiveReport: any = {
    Top: JSON.parse(localStorage.Report).collective_Top,
    Middle: JSON.parse(localStorage.Report).collective_Middle,
    Array: JSON.parse(localStorage.Report).collective_Array,
  };

  const [collectiveArrayData, setCollectiveArrayData] = useState<any[]>([]);

  const collectivePieData: any[] = localStorage.collectivePieData ? JSON.parse(localStorage.collectivePieData) : [];
  useEffect(() => {
    try {
      if (collectiveReport.Array[0].content) {
        const collectiveArrayContent: any[] = [];
        const tempData = collectiveReport.Array[0].content;
        let outerCount = 0;
        Object.entries<any>(tempData).forEach(([key, value]) => {
          outerCount = 0;
          Object.entries<any>(value.segments).forEach(([key, values]) => {
            values.count = values.users.length;
            outerCount += values.users.length;
          });
          value.totalCount = outerCount;
        });
        Object.entries<any>(tempData).forEach(([key, value]) => {
          collectiveArrayContent.push(value);
        });
        setCollectiveArrayData(collectiveArrayContent);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {collectiveReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).collective_Title}
          top={collectiveReport.Top}
          middle={collectiveReport.Middle}
          segment={collectiveArrayData}
          Position={collectiveReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).collective_Pie}
          chartOption={collectivePieChart}
          chartData={collectivePieData}
        />
      )}
    </>
  );
}
