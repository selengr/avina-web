import { useEffect, useState } from 'react';
import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';

export function TotalReport(props) {
  const totalPieChart: any = localStorage.totalPieChart;

  const totalReport: any = {
    Top: JSON.parse(localStorage.Report).total_Top,
    Middle: JSON.parse(localStorage.Report).total_Middle,
    Array: JSON.parse(localStorage.Report).total_Array,
  };

  const totalPieData: any[] = localStorage.totalPieData ? JSON.parse(localStorage.totalPieData) : [];
  const [totalArrayData, setTotalArrayData] = useState<any[]>([]);
  useEffect(() => {
    try {
      const totalArrayContent: any = [];
      if (totalReport.Array[0].content) {
        const tempData: any[] = totalReport.Array[0].content;
        let outerCount = 0;
        Object.entries<any>(tempData).forEach(([key, value]) => {
          outerCount = 0;
          Object.entries<any>(value.segments).forEach(([key, values]) => {
            values.count = values.users.length;
            outerCount += values.users.length;
          });
          value.totalCount = outerCount;
        });
        Object.entries(tempData).forEach(([key, value]) => {
          totalArrayContent.push(value);
        });
        setTotalArrayData(totalArrayContent);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {totalReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).total_Title}
          top={totalReport.Top}
          middle={totalReport.Middle}
          segment={totalArrayData}
          Position={totalReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).total_Pie}
          chartOption={totalPieChart}
          chartData={totalPieData}
        />
      )}
    </>
  );
}
