import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function QOLSReport(props) {
  const Physical_healthPieChart: any[] = localStorage.Physical_healthPieChart;
  const Psychological_healthPieChart: any[] = localStorage.Psychological_healthPieChart;
  const Social_relationshipsPieChart: any[] = localStorage.Social_relationshipsPieChart;
  const EnvironmentPieChart: any[] = localStorage.EnvironmentPieChart;

  const Physical_healthReport: any = {
    Top: JSON.parse(localStorage.Report).Physical_health_Top,
    Middle: JSON.parse(localStorage.Report).Physical_health_Middle,
    Array: JSON.parse(localStorage.Report).Physical_health_Array,
  };

  const Psychological_healthReport: any = {
    Top: JSON.parse(localStorage.Report).Psychological_health_Top,
    Middle: JSON.parse(localStorage.Report).Psychological_health_Middle,
    Array: JSON.parse(localStorage.Report).Psychological_health_Array,
  };

  const Social_relationshipsReport: any = {
    Top: JSON.parse(localStorage.Report).Social_relationships_Top,
    Middle: JSON.parse(localStorage.Report).Social_relationships_Middle,
    Array: JSON.parse(localStorage.Report).Social_relationships_Array,
  };

  const EnvironmentReport: any = {
    Top: JSON.parse(localStorage.Report).Environment_Top,
    Middle: JSON.parse(localStorage.Report).Environment_Middle,
    Array: JSON.parse(localStorage.Report).Environment_Array,
  };

  const [physical_healthArrayData, setPhysical_healthArrayData] = useState<any[]>([]);
  const [psychological_healthArrayData, setPsychological_healthArrayData] = useState<any[]>([]);
  const [social_relationshipsArrayData, setSocial_relationshipsArrayData] = useState<any[]>([]);
  const [environmentArrayData, setEnvironmentArrayData] = useState<any[]>([]);

  const Physical_healthPieData: any[] = localStorage.Physical_healthPieData ? JSON.parse(localStorage.Physical_healthPieData) : [];
  const Psychological_healthPieData: any[] = localStorage.Psychological_healthPieData ? JSON.parse(localStorage.Psychological_healthPieData) : [];
  const Social_relationshipsPieData: any[] = localStorage.Social_relationshipsPieData ? JSON.parse(localStorage.Social_relationshipsPieData) : [];
  const EnvironmentPieData: any[] = localStorage.EnvironmentPieData ? JSON.parse(localStorage.EnvironmentPieData) : [];

  useEffect(() => {
    try {
      if (Physical_healthReport.Array[0].content) {
        const Physical_healthArrayContent: any[] = [];
        const tempData = Physical_healthReport.Array[0].content;
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
          Physical_healthArrayContent.push(value);
        });
        setPhysical_healthArrayData(Physical_healthArrayContent);
      }

      if (Psychological_healthReport.Array[0].content) {
        const Psychological_healthArrayContent: any[] = [];
        const tempData = Psychological_healthReport.Array[0].content;
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
          Psychological_healthArrayContent.push(value);
        });
        setPsychological_healthArrayData(Psychological_healthArrayContent);
      }

      if (Social_relationshipsReport.Array[0].content) {
        const Social_relationshipsArrayContent: any[] = [];
        const tempData = Social_relationshipsReport.Array[0].content;
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
          Social_relationshipsArrayContent.push(value);
        });
        setSocial_relationshipsArrayData(Social_relationshipsArrayContent);
      }

      if (EnvironmentReport.Array[0].content) {
        const EnvironmentArrayContent: any[] = [];
        const tempData = EnvironmentReport.Array[0].content;
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
          EnvironmentArrayContent.push(value);
        });
        setEnvironmentArrayData(EnvironmentArrayContent);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {Physical_healthReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).Physical_health_Title}
          top={Physical_healthReport.Top}
          middle={Physical_healthReport.Middle}
          segment={physical_healthArrayData}
          Position={Physical_healthReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).Psychological_health_Pie}
          chartOption={Physical_healthPieChart}
          chartData={Physical_healthPieData}
        />
      )}
      {Psychological_healthReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).Psychological_health_Title}
          top={Psychological_healthReport.Top}
          middle={Psychological_healthReport.Middle}
          segment={psychological_healthArrayData}
          Position={Psychological_healthReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).Psychological_health_Pie}
          chartOption={Psychological_healthPieChart}
          chartData={Psychological_healthPieData}
        />
      )}
      {Social_relationshipsReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).Social_relationships_Title}
          top={Social_relationshipsReport.Top}
          middle={Social_relationshipsReport.Middle}
          segment={social_relationshipsArrayData}
          Position={Social_relationshipsReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).Social_relationships_Pie}
          chartOption={Social_relationshipsPieChart}
          chartData={Social_relationshipsPieData}
        />
      )}
      {EnvironmentReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).Environment_Title}
          top={EnvironmentReport.Top}
          middle={EnvironmentReport.Middle}
          segment={environmentArrayData}
          Position={EnvironmentReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).Environment_Pie}
          chartOption={EnvironmentPieChart}
          chartData={EnvironmentPieData}
        />
      )}
    </>
  );
}
