import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function GDMSReport(props) {
  const first_stylePieChart: any[] = localStorage.first_stylePieChart;
  const second_stylePieChart: any[] = localStorage.second_stylePieChart;

  const first_style_Report: any = {
    Top: JSON.parse(localStorage.Report).first_style_Top,
    Middle: JSON.parse(localStorage.Report).first_style_Middle,
    Array: JSON.parse(localStorage.Report).first_style_Array,
  };
  const second_style_Report: any = {
    Top: JSON.parse(localStorage.Report).second_style_Top,
    Middle: JSON.parse(localStorage.Report).second_style_Middle,
    Array: JSON.parse(localStorage.Report).second_style_Array,
  };

  const [firstStyleArrayData, setFirstStyleArrayData] = useState<any[]>([]);
  const [secondStyleArrayData, setSecondStyleArrayData] = useState<any[]>([]);

  const first_stylePieData: any[] = localStorage.first_stylePieData ? JSON.parse(localStorage.first_stylePieData) : [];
  const second_stylePieData: any[] = localStorage.second_stylePieData ? JSON.parse(localStorage.second_stylePieData) : [];

  useEffect(() => {
    try {
      if (first_style_Report.Array[0].content) {
        const firstStyleArrayContent: any[] = [];
        const tempData = first_style_Report.Array[0].content;
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
          firstStyleArrayContent.push(value);
        });
        setFirstStyleArrayData(firstStyleArrayContent);
      }
      if (second_style_Report.Array[0].content) {
        const secondStyleArrayContent: any[] = [];
        const tempData = second_style_Report.Array[0].content;
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
          secondStyleArrayContent.push(value);
        });
        setSecondStyleArrayData(secondStyleArrayContent);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {first_style_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).first_style_Title}
          top={first_style_Report.Top}
          middle={first_style_Report.Middle}
          segment={firstStyleArrayData}
          Position={first_style_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).first_style_Pie}
          chartOption={first_stylePieChart}
          chartData={first_stylePieData}
        />
      )}
      {second_style_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).second_style_Title}
          top={second_style_Report.Top}
          middle={second_style_Report.Middle}
          segment={secondStyleArrayData}
          Position={second_style_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).second_style_Pie}
          chartOption={second_stylePieChart}
          chartData={second_stylePieData}
        />
      )}
    </>
  );
}
