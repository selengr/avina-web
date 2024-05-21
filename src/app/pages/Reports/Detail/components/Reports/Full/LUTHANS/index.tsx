import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function LuthansReport(props) {
  const efficacyPieChart: any = localStorage.efficacyPieChart;
  const hopePieChart: any = localStorage.hopePieChart;
  const resiliencePieChart: any = localStorage.resiliencePieChart;
  const optimismPieChart: any = localStorage.optimismPieChart;

  const hopeReport: any = {
    Top: JSON.parse(localStorage.Report).hope_Top,
    Middle: JSON.parse(localStorage.Report).hope_Middle,
    Array: JSON.parse(localStorage.Report).hope_Array,
  };

  const efficacyReport: any = {
    Top: JSON.parse(localStorage.Report).efficacy_Top,
    Middle: JSON.parse(localStorage.Report).efficacy_Middle,
    Array: JSON.parse(localStorage.Report).efficacy_Array,
  };

  const resilienceReport: any = {
    Top: JSON.parse(localStorage.Report).resilience_Top,
    Middle: JSON.parse(localStorage.Report).resilience_Middle,
    Array: JSON.parse(localStorage.Report).resilience_Array,
  };

  const optimismReport: any = {
    Top: JSON.parse(localStorage.Report).optimism_Top,
    Middle: JSON.parse(localStorage.Report).optimism_Middle,
    Array: JSON.parse(localStorage.Report).optimism_Array,
  };

  const [efficacyArrayData, setEfficacyArrayData] = useState<any[]>([]);
  const [hopeArrayData, setHopeArrayData] = useState<any[]>([]);
  const [resilienceArrayData, setResilienceArrayData] = useState<any[]>([]);
  const [optimismArrayData, setOptimismArrayData] = useState<any[]>([]);

  const efficacyPieData: any[] = localStorage.efficacyPieData ? JSON.parse(localStorage.efficacyPieData) : [];
  const hopePieData: any[] = localStorage.hopePieData ? JSON.parse(localStorage.hopePieData) : [];
  const resiliencePieData: any[] = localStorage.resiliencePieData ? JSON.parse(localStorage.resiliencePieData) : [];
  const optimismPieData: any[] = localStorage.optimismPieData ? JSON.parse(localStorage.optimismPieData) : [];

  useEffect(() => {
    try {
      if (efficacyReport.Array[0].content) {
        const efficacyArrayContent: any[] = [];
        const tempData: any[] = efficacyReport.Array[0].content;
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
          efficacyArrayContent.push(value);
        });
        setEfficacyArrayData(efficacyArrayContent);
      }

      if (hopeReport.Array[0].content) {
        const hopeArrayContent: any[] = [];
        const tempData: any[] = hopeReport.Array[0].content;
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
          hopeArrayContent.push(value);
        });
        setHopeArrayData(hopeArrayContent);
      }

      if (resilienceReport.Array[0].content) {
        const resilienceArrayContent: any[] = [];
        const tempData: any[] = resilienceReport.Array[0].content;
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
          resilienceArrayContent.push(value);
        });
        setResilienceArrayData(resilienceArrayContent);
      }

      if (optimismReport.Array[0].content) {
        const optimismArrayContent: any[] = [];
        const tempData: any[] = optimismReport.Array[0].content;
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
          optimismArrayContent.push(value);
        });
        setOptimismArrayData(optimismArrayContent);
      }
    } catch (e) {}
  }, []);
  return (
    <>
      {efficacyReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).efficacy_Title}
          top={efficacyReport.Top}
          middle={efficacyReport.Middle}
          segment={efficacyArrayData}
          Position={efficacyReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).efficacy_Pie}
          chartOption={efficacyPieChart}
          chartData={efficacyPieData}
        />
      )}
      {hopeReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).hope_Title}
          top={hopeReport.Top}
          middle={hopeReport.Middle}
          segment={hopeArrayData}
          Position={hopeReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).hope_Pie}
          chartOption={hopePieChart}
          chartData={hopePieData}
        />
      )}
      {resilienceReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).resilience_Title}
          top={resilienceReport.Top}
          middle={resilienceReport.Middle}
          segment={resilienceArrayData}
          Position={resilienceReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).resilience_Pie}
          chartOption={resiliencePieChart}
          chartData={resiliencePieData}
        />
      )}
      {optimismReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).optimism_Title}
          top={optimismReport.Top}
          middle={optimismReport.Middle}
          segment={optimismArrayData}
          Position={optimismReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).optimism_Pie}
          chartOption={optimismPieChart}
          chartData={optimismPieData}
        />
      )}
    </>
  );
}
