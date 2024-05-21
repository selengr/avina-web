import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function CMSReport(props) {
  const competingStrategyPieChart: any[] = localStorage.competingStrategyPieChart;
  const collaboratingCompromisingStrategyPieChart: any[] = localStorage.collaboratingCompromisingStrategyPieChart;
  const avoidingStrategyPieChart: any[] = localStorage.avoidingStrategyPieChart;

  const competingStrategyReport: any = {
    Top: JSON.parse(localStorage.Report).competingStrategy_Top,
    Middle: JSON.parse(localStorage.Report).competingStrategy_Middle,
    Array: JSON.parse(localStorage.Report).competingStrategy_Array,
  };

  const collaboratingCompromisingStrategyReport: any = {
    Top: JSON.parse(localStorage.Report).collaboratingCompromisingStrategy_Top,
    Middle: JSON.parse(localStorage.Report).collaboratingCompromisingStrategy_Middle,
    Array: JSON.parse(localStorage.Report).collaboratingCompromisingStrategy_Array,
  };

  const avoidingStrategyReport: any = {
    Top: JSON.parse(localStorage.Report).avoidingStrategy_Top,
    Middle: JSON.parse(localStorage.Report).avoidingStrategy_Middle,
    Array: JSON.parse(localStorage.Report).avoidingStrategy_Array,
  };

  const [competingStrategyArrayData, setCompetingStrategyArrayData] = useState<any[]>([]);
  const [collaboratingCompromisingStrategyArrayData, setCollaboratingCompromisingStrategyArrayData] = useState<any[]>([]);
  const [avoidingStrategyArrayData, setAvoidingStrategyArrayData] = useState<any[]>([]);

  const competingStrategyPieData: any[] = localStorage.competingStrategyPieData ? JSON.parse(localStorage.competingStrategyPieData) : [];
  const collaboratingCompromisingStrategyPieData: any[] = localStorage.collaboratingCompromisingStrategyPieData ? JSON.parse(localStorage.collaboratingCompromisingStrategyPieData) : [];
  const avoidingStrategyPieData: any[] = localStorage.avoidingStrategyPieData ? JSON.parse(localStorage.avoidingStrategyPieData) : [];

  useEffect(() => {
    try {
      if (competingStrategyReport.Array[0].content) {
        const competingStrategyArrayContent: any[] = [];
        const tempData = competingStrategyReport.Array[0].content;
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
          competingStrategyArrayContent.push(value);
        });
        setCompetingStrategyArrayData(competingStrategyArrayContent);
      }

      if (collaboratingCompromisingStrategyReport.Array[0].content) {
        const collaboratingCompromisingStrategyArrayContent: any[] = [];
        const tempData = collaboratingCompromisingStrategyReport.Array[0].content;
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
          collaboratingCompromisingStrategyArrayContent.push(value);
        });
        setCollaboratingCompromisingStrategyArrayData(collaboratingCompromisingStrategyArrayContent);
      }

      if (avoidingStrategyReport.Array[0].content) {
        const avoidingStrategyArrayContent: any[] = [];
        const tempData = avoidingStrategyReport.Array[0].content;
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
          avoidingStrategyArrayContent.push(value);
        });
        setAvoidingStrategyArrayData(avoidingStrategyArrayContent);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {competingStrategyReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).competingStrategy_Title}
          top={competingStrategyReport.Top}
          middle={competingStrategyReport.Middle}
          segment={competingStrategyArrayData}
          Position={competingStrategyReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).competingStrategy_Pie}
          chartOption={competingStrategyPieChart}
          chartData={competingStrategyPieData}
        />
      )}

      {collaboratingCompromisingStrategyReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).collaboratingCompromisingStrategy_Title}
          top={collaboratingCompromisingStrategyReport.Top}
          middle={collaboratingCompromisingStrategyReport.Middle}
          segment={collaboratingCompromisingStrategyArrayData}
          Position={collaboratingCompromisingStrategyReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).collaboratingCompromisingStrategy_Pie}
          chartOption={collaboratingCompromisingStrategyPieChart}
          chartData={collaboratingCompromisingStrategyPieData}
        />
      )}
      {avoidingStrategyReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).avoidingStrategy_Title}
          top={avoidingStrategyReport.Top}
          middle={avoidingStrategyReport.Middle}
          segment={avoidingStrategyArrayData}
          Position={avoidingStrategyReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).avoidingStrategy_Pie}
          chartOption={avoidingStrategyPieChart}
          chartData={avoidingStrategyPieData}
        />
      )}
    </>
  );
}
