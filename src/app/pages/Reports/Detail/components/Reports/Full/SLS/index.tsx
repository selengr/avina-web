import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function SLSReport(props) {
  const socialLoafingPieChart: any[] = localStorage.socialLoafingPieChart;

  const socialLoafing_Report: any = {
    Top: JSON.parse(localStorage.Report).socialLoafing_Top,
    Middle: JSON.parse(localStorage.Report).socialLoafing_Middle,
    Array: JSON.parse(localStorage.Report).socialLoafing_Array,
  };

  const [socialLoafingArrayData, setSocialLoafingArrayData] = useState<any[]>([]);

  const socialLoafingPieData: any[] = localStorage.socialLoafingPieData ? JSON.parse(localStorage.socialLoafingPieData) : [];

  useEffect(() => {
    try {
      if (socialLoafing_Report.Array[0].content) {
        const socialLoafingDataContent: any[] = [];
        const tempData = socialLoafing_Report.Array[0].content;
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
          socialLoafingDataContent.push(value);
        });
        setSocialLoafingArrayData(socialLoafingDataContent);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {socialLoafing_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).socialLoafing_Title}
          top={socialLoafing_Report.Top}
          middle={socialLoafing_Report.Middle}
          segment={socialLoafingArrayData}
          Position={socialLoafing_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).socialLoafing_Pie}
          chartOption={socialLoafingPieChart}
          chartData={socialLoafingPieData}
        />
      )}
    </>
  );
}
