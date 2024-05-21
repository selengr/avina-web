import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function GHQReport(props) {
  const psychosomaticPieChart: any[] = localStorage.psychosomaticPieChart;
  const anxietyAndSleepDisorderPieChart: any[] = localStorage.anxietyAndSleepDisorderPieChart;
  const socialPerformanceDisorderPieChart: any[] = localStorage.socialPerformanceDisorderPieChart;
  // const depressionPieChart: any[] = localStorage.depressionPieChart;

  const psychosomaticReport: any = {
    Top: JSON.parse(localStorage.Report).psychosomatic_Top,
    Middle: JSON.parse(localStorage.Report).psychosomatic_Middle,
    Array: JSON.parse(localStorage.Report).psychosomatic_Array,
  };

  const anxietyAndSleepDisorderReport: any = {
    Top: JSON.parse(localStorage.Report).anxietyAndSleepDisorder_Top,
    Middle: JSON.parse(localStorage.Report).anxietyAndSleepDisorder_Middle,
    Array: JSON.parse(localStorage.Report).anxietyAndSleepDisorder_Array,
  };

  const socialPerformanceDisorderReport: any = {
    Top: JSON.parse(localStorage.Report).socialPerformanceDisorder_Top,
    Middle: JSON.parse(localStorage.Report).socialPerformanceDisorder_Middle,
    Array: JSON.parse(localStorage.Report).socialPerformanceDisorder_Array,
  };

  // const depressionReport: any = {
  //   Top: JSON.parse(localStorage.Report).depression_Top,
  //   Middle: JSON.parse(localStorage.Report).depression_Middle,
  //   Array: JSON.parse(localStorage.Report).depression_Array,
  // };

  const [psychosomaticArrayData, setPsychosomaticArrayData] = useState<any[]>([]);
  const [anxietyAndSleepDisorderArrayData, setAnxietyAndSleepDisorderArrayData] = useState<any[]>([]);
  const [socialPerformanceDisorderArrayData, setSocialPerformanceDisorderArrayData] = useState<any[]>([]);
  // const [depressionArrayData, setDepressionArrayData] = useState<any[]>([]);

  const psychosomaticPieData: any[] = localStorage.psychosomaticPieData ? JSON.parse(localStorage.psychosomaticPieData) : [];
  const anxietyAndSleepDisorderPieData: any[] = localStorage.anxietyAndSleepDisorderPieData ? JSON.parse(localStorage.anxietyAndSleepDisorderPieData) : [];
  const socialPerformanceDisorderPieData: any[] = localStorage.socialPerformanceDisorderPieData ? JSON.parse(localStorage.socialPerformanceDisorderPieData) : [];
  // const depressionPieData: any[] = localStorage.depressionPieData ? JSON.parse(localStorage.depressionPieData) : [];

  useEffect(() => {
    try {
      if (psychosomaticReport.Array[0].content) {
        const psychosomaticArrayContent: any[] = [];
        const tempData = psychosomaticReport.Array[0].content;
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
          psychosomaticArrayContent.push(value);
        });
        setPsychosomaticArrayData(psychosomaticArrayContent);
      }

      if (anxietyAndSleepDisorderReport.Array[0].content) {
        const anxietyAndSleepDisorderArrayContent: any[] = [];
        const tempData = anxietyAndSleepDisorderReport.Array[0].content;
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
          anxietyAndSleepDisorderArrayContent.push(value);
        });
        setAnxietyAndSleepDisorderArrayData(anxietyAndSleepDisorderArrayContent);
      }

      if (socialPerformanceDisorderReport.Array[0].content) {
        const socialPerformanceDisorderArrayContent: any[] = [];
        const tempData = socialPerformanceDisorderReport.Array[0].content;
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
          socialPerformanceDisorderArrayContent.push(value);
        });
        setSocialPerformanceDisorderArrayData(socialPerformanceDisorderArrayContent);
      }

      // if (depressionReport.Array[0].content) {
      //   const depressionArrayContent: any[] = [];
      //   const tempData = depressionReport.Array[0].content;
      //   let outerCount = 0;
      //   Object.entries<any>(tempData).forEach(([key, value]) => {
      //     outerCount = 0;
      //     Object.entries<any>(value.segments).forEach(([key, values]) => {
      //       values.count = values.users.length;
      //       outerCount += values.users.length;
      //     });
      //     value.totalCount = outerCount;
      //   });
      //   Object.entries<any>(tempData).forEach(([key, value]) => {
      //     depressionArrayContent.push(value);
      //   });
      //   setDepressionArrayData(depressionArrayContent);
      // }
    } catch (e) {}
  }, []);
  return (
    <>
      {psychosomaticReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).psychosomatic_Title}
          top={psychosomaticReport.Top}
          middle={psychosomaticReport.Middle}
          segment={psychosomaticArrayData}
          Position={psychosomaticReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).psychosomatic_Pie}
          chartOption={psychosomaticPieChart}
          chartData={psychosomaticPieData}
        />
      )}
      {anxietyAndSleepDisorderReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).anxietyAndSleepDisorder_Title}
          top={anxietyAndSleepDisorderReport.Top}
          middle={anxietyAndSleepDisorderReport.Middle}
          segment={anxietyAndSleepDisorderArrayData}
          Position={anxietyAndSleepDisorderReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).anxietyAndSleepDisorder_Pie}
          chartOption={anxietyAndSleepDisorderPieChart}
          chartData={anxietyAndSleepDisorderPieData}
        />
      )}
      {socialPerformanceDisorderReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).socialPerformanceDisorder_Title}
          top={socialPerformanceDisorderReport.Top}
          middle={socialPerformanceDisorderReport.Middle}
          segment={socialPerformanceDisorderArrayData}
          Position={socialPerformanceDisorderReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).socialPerformanceDisorder_Pie}
          chartOption={socialPerformanceDisorderPieChart}
          chartData={socialPerformanceDisorderPieData}
        />
      )}
      {/*{depressionReport.Top && (*/}
      {/*  <ReportItem*/}
      {/*    itemTitle={JSON.parse(localStorage.Report).depression_Title}*/}
      {/*    top={depressionReport.Top}*/}
      {/*    middle={depressionReport.Middle}*/}
      {/*    segment={depressionArrayData}*/}
      {/*    Position={depressionReport.Array}*/}
      {/*    expander={props.expander}*/}
      {/*    childAccordion={props.childAccordion}*/}
      {/*    pieTitle={JSON.parse(localStorage.Report).depression_Pie}*/}
      {/*    chartOption={depressionPieChart}*/}
      {/*    chartData={depressionPieData}*/}
      {/*  />*/}
      {/*)}*/}
    </>
  );
}
