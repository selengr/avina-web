import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function IndividualismReport(props) {
  const horizontalIndividualismPieChart: any[] = localStorage.horizontal_individualismPieChart;
  const verticalIndividualismPieChart: any[] = localStorage.vertical_individualismPieChart;
  const horizontalCollectivismPieChart: any[] = localStorage.horizontal_collectivismPieChart;
  const verticalCollectivismPieChart: any[] = localStorage.horizontal_collectivismPieChart;

  const horizontalIndividualismReport: any = {
    Top: JSON.parse(localStorage.Report).horizontal_individualism_Top,
    Middle: JSON.parse(localStorage.Report).horizontal_individualism_Middle,
    Array: JSON.parse(localStorage.Report).horizontal_individualism_Array,
  };

  const verticalIndividualismReport: any = {
    Top: JSON.parse(localStorage.Report).vertical_individualism_Top,
    Middle: JSON.parse(localStorage.Report).vertical_individualism_Middle,
    Array: JSON.parse(localStorage.Report).vertical_individualism_Array,
  };

  const horizontalCollectivismReport: any = {
    Top: JSON.parse(localStorage.Report).horizontal_collectivism_Top,
    Middle: JSON.parse(localStorage.Report).horizontal_collectivism_Middle,
    Array: JSON.parse(localStorage.Report).horizontal_collectivism_Array,
  };

  const verticalCollectivismReport: any = {
    Top: JSON.parse(localStorage.Report).vertical_collectivism_Top,
    Middle: JSON.parse(localStorage.Report).vertical_collectivism_Middle,
    Array: JSON.parse(localStorage.Report).vertical_collectivism_Array,
  };

  const [horizontalIndividualismArrayData, setHorizontalIndividualismArrayData] = useState<any[]>([]);
  const [verticalIndividualismArrayData, setVerticalIndividualismArrayData] = useState<any[]>([]);
  const [horizontalCollectivismArrayData, setHorizontalCollectivismArrayData] = useState<any[]>([]);
  const [verticalCollectivismArrayData, setVerticalCollectivismArrayData] = useState<any[]>([]);

  const horizontalIndividualismPieData: any[] = localStorage.horizontalIndividualismPieData ? JSON.parse(localStorage.horizontalIndividualismPieData) : [];
  const verticalIndividualismPieData: any[] = localStorage.verticalIndividualismPieData ? JSON.parse(localStorage.verticalIndividualismPieData) : [];
  const horizontalCollectivismPieData: any[] = localStorage.horizontalCollectivismPieData ? JSON.parse(localStorage.horizontalCollectivismPieData) : [];
  const verticalCollectivismPieData: any[] = localStorage.verticalCollectivismPieData ? JSON.parse(localStorage.verticalCollectivismPieData) : [];

  useEffect(() => {
    try {
      if (horizontalIndividualismReport.Array) {
        const horizontalIndividualismArrayContent: any[] = [];
        const tempData = horizontalIndividualismReport.Array;
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
          horizontalIndividualismArrayContent.push(value);
        });
        setHorizontalIndividualismArrayData(horizontalIndividualismArrayContent);
      }

      if (verticalIndividualismReport.Array) {
        const verticalIndividualismArrayContent: any[] = [];
        const tempData = verticalIndividualismReport.Array;
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
          verticalIndividualismArrayContent.push(value);
        });
        setVerticalIndividualismArrayData(verticalIndividualismArrayContent);
      }

      if (horizontalCollectivismReport.Array) {
        const horizontalCollectivismArrayContent: any[] = [];
        const tempData = horizontalCollectivismReport.Array;
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
          horizontalCollectivismArrayContent.push(value);
        });
        setHorizontalCollectivismArrayData(horizontalCollectivismArrayContent);
      }

      if (verticalCollectivismReport.Array) {
        const verticalCollectivismArrayContent: any[] = [];
        const tempData = verticalCollectivismReport.Array;
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
          verticalCollectivismArrayContent.push(value);
        });
        setVerticalCollectivismArrayData(verticalCollectivismArrayContent);
      }
    } catch (e) {}
  }, []);
  return (
    <>
      {horizontalIndividualismReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).horizontal_individualism_Title}
          top={horizontalIndividualismReport.Top}
          middle={horizontalIndividualismReport.Middle}
          segment={horizontalIndividualismArrayData}
          Position={horizontalIndividualismReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).horizontal_individualism_Pie}
          chartOption={horizontalIndividualismPieChart}
          chartData={horizontalIndividualismPieData}
        />
      )}
      {verticalIndividualismReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).vertical_individualism_Title}
          top={verticalIndividualismReport.Top}
          middle={verticalIndividualismReport.Middle}
          segment={verticalIndividualismArrayData}
          Position={verticalIndividualismReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).vertical_individualism_Pie}
          chartOption={verticalIndividualismPieChart}
          chartData={verticalIndividualismPieData}
        />
      )}
      {horizontalCollectivismReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).horizontal_collectivism_Title}
          top={horizontalCollectivismReport.Top}
          middle={horizontalCollectivismReport.Middle}
          segment={horizontalCollectivismArrayData}
          Position={horizontalCollectivismReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).horizontal_collectivism_Pie}
          chartOption={horizontalCollectivismPieChart}
          chartData={horizontalCollectivismPieData}
        />
      )}
      {verticalCollectivismReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).vertical_collectivism_Title}
          top={verticalCollectivismReport.Top}
          middle={verticalCollectivismReport.Middle}
          segment={verticalCollectivismArrayData}
          Position={verticalCollectivismReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).vertical_collectivism_Pie}
          chartOption={verticalCollectivismPieChart}
          chartData={verticalCollectivismPieData}
        />
      )}
    </>
  );
}
