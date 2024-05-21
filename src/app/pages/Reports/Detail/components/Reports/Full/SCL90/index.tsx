import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function Scl90Report(props) {
  const depressionPieChart: any[] = localStorage.depressionPieChart;
  const hostilityPieChart: any[] = localStorage.hostilityPieChart;
  const somatizationPieChart: any[] = localStorage.somatizationPieChart;
  const interpersonalSensitivityPieChart: any[] = localStorage.interpersonal_sensitivityPieChart;
  const paranoidIdeationPieChart: any[] = localStorage.paranoid_ideationPieChart;
  const obsessiveCompulsionPieChart: any[] = localStorage.obsessive_compulsionPieChart;
  const anxietyPieChart: any[] = localStorage.anxietyPieChart;
  const phobicAnxietyPieChart: any[] = localStorage.phobic_anxietyPieChart;
  const psychoticismPieChart: any[] = localStorage.psychoticismPieChart;

  const depressionReport: any = {
    Top: JSON.parse(localStorage.Report).depression_Top,
    Middle: JSON.parse(localStorage.Report).depression_Middle,
    Array: JSON.parse(localStorage.Report).depression_Array,
  };

  const hostilityReport: any = {
    Top: JSON.parse(localStorage.Report).hostility_Top,
    Middle: JSON.parse(localStorage.Report).hostility_Middle,
    Array: JSON.parse(localStorage.Report).hostility_Array,
  };

  const somatizationReport: any = {
    Top: JSON.parse(localStorage.Report).somatization_Top,
    Middle: JSON.parse(localStorage.Report).somatization_Middle,
    Array: JSON.parse(localStorage.Report).somatization_Array,
  };

  const interpersonalSensitivityReport: any = {
    Top: JSON.parse(localStorage.Report).interpersonal_sensitivity_Top,
    Middle: JSON.parse(localStorage.Report).interpersonal_sensitivity_Middle,
    Array: JSON.parse(localStorage.Report).interpersonal_sensitivity_Array,
  };

  const paranoidIdeationReport: any = {
    Top: JSON.parse(localStorage.Report).paranoid_ideation_Top,
    Middle: JSON.parse(localStorage.Report).paranoid_ideation_Middle,
    Array: JSON.parse(localStorage.Report).paranoid_ideation_Array,
  };

  const obsessiveCompulsionReport: any = {
    Top: JSON.parse(localStorage.Report).obsessive_compulsion_Top,
    Middle: JSON.parse(localStorage.Report).obsessive_compulsion_Middle,
    Array: JSON.parse(localStorage.Report).obsessive_compulsion_Array,
  };

  const anxietyReport: any = {
    Top: JSON.parse(localStorage.Report).anxiety_Top,
    Middle: JSON.parse(localStorage.Report).anxiety_Middle,
    Array: JSON.parse(localStorage.Report).anxiety_Array,
  };

  const phobicAnxietyReport: any = {
    Top: JSON.parse(localStorage.Report).phobic_anxiety_Top,
    Middle: JSON.parse(localStorage.Report).phobic_anxiety_Middle,
    Array: JSON.parse(localStorage.Report).phobic_anxiety_Array,
  };

  const psychoticismReport: any = {
    Top: JSON.parse(localStorage.Report).psychoticism_Top,
    Middle: JSON.parse(localStorage.Report).psychoticism_Middle,
    Array: JSON.parse(localStorage.Report).psychoticism_Array,
  };

  const [depressionArrayData, setDepressionArrayData] = useState<any[]>([]);
  const [hostilityArrayData, setHostilityArrayData] = useState<any[]>([]);
  const [somatizationArrayData, setSomatizationArrayData] = useState<any[]>([]);
  const [interpersonalSensitivityArrayData, setInterpersonalSensitivityArrayData] = useState<any[]>([]);
  const [paranoidIdeationArrayData, setParanoidIdeationArrayData] = useState<any[]>([]);
  const [obsessiveCompulsionArrayData, setObsessiveCompulsionArrayData] = useState<any[]>([]);
  const [anxietyArrayData, setAnxietyArrayData] = useState<any[]>([]);
  const [phobicAnxietyArrayData, setPhobicAnxietyArrayData] = useState<any[]>([]);
  const [psychoticismArrayData, setPsychoticismArrayData] = useState<any[]>([]);

  const depressionPieData: any[] = localStorage.depressionPieData ? JSON.parse(localStorage.depressionPieData) : [];
  const hostilityPieData: any[] = localStorage.hostilityPieData ? JSON.parse(localStorage.hostilityPieData) : [];
  const somatizationPieData: any[] = localStorage.somatizationPieData ? JSON.parse(localStorage.somatizationPieData) : [];
  const interpersonalSensitivityPieData: any[] = localStorage.interpersonalSensitivityPieData ? JSON.parse(localStorage.interpersonalSensitivityPieData) : [];
  const paranoidIdeationPieData: any[] = localStorage.paranoidIdeationPieData ? JSON.parse(localStorage.paranoidIdeationPieData) : [];
  const obsessiveCompulsionPieData: any[] = localStorage.obsessiveCompulsionPieData ? JSON.parse(localStorage.obsessiveCompulsionPieData) : [];
  const anxietyPieData: any[] = localStorage.anxietyPieData ? JSON.parse(localStorage.anxietyPieData) : [];
  const phobicAnxietyPieData: any[] = localStorage.phobicAnxietyPieData ? JSON.parse(localStorage.phobicAnxietyPieData) : [];
  const psychoticismPieData: any[] = localStorage.psychoticismPieData ? JSON.parse(localStorage.psychoticismPieData) : [];

  useEffect(() => {
    try {
      if (depressionReport.Array[0].content) {
        const depressionArrayContent: any[] = [];
        const tempData = depressionReport.Array[0].content;
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
          depressionArrayContent.push(value);
        });
        setDepressionArrayData(depressionArrayContent);
      }

      if (hostilityReport.Array[0].content) {
        const hostilityArrayContent: any[] = [];
        const tempData = hostilityReport.Array[0].content;
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
          hostilityArrayContent.push(value);
        });
        setHostilityArrayData(hostilityArrayContent);
      }

      if (somatizationReport.Array[0].content) {
        const somatizationArrayContent: any[] = [];
        const tempData = somatizationReport.Array[0].content;
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
          somatizationArrayContent.push(value);
        });
        setSomatizationArrayData(somatizationArrayContent);
      }

      if (interpersonalSensitivityReport.Array[0].content) {
        const interpersonalSensitivityArrayContent: any[] = [];
        const tempData = interpersonalSensitivityReport.Array[0].content;
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
          interpersonalSensitivityArrayContent.push(value);
        });
        setInterpersonalSensitivityArrayData(interpersonalSensitivityArrayContent);
      }

      if (paranoidIdeationReport.Array[0].content) {
        const paranoidIdeationArrayContent: any[] = [];
        const tempData = paranoidIdeationReport.Array[0].content;
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
          paranoidIdeationArrayContent.push(value);
        });
        setParanoidIdeationArrayData(paranoidIdeationArrayContent);
      }

      if (obsessiveCompulsionReport.Array[0].content) {
        const obsessiveCompulsionArrayContent: any[] = [];
        const tempData = obsessiveCompulsionReport.Array[0].content;
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
          obsessiveCompulsionArrayContent.push(value);
        });
        setObsessiveCompulsionArrayData(obsessiveCompulsionArrayContent);
      }

      if (anxietyReport.Array[0].content) {
        const anxietyArrayContent: any[] = [];
        const tempData = anxietyReport.Array[0].content;
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
          anxietyArrayContent.push(value);
        });
        setAnxietyArrayData(anxietyArrayContent);
      }

      if (phobicAnxietyReport.Array[0].content) {
        const phobicAnxietyArrayContent: any[] = [];
        const tempData = phobicAnxietyReport.Array[0].content;
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
          phobicAnxietyArrayContent.push(value);
        });
        setPhobicAnxietyArrayData(phobicAnxietyArrayContent);
      }

      if (psychoticismReport.Array[0].content) {
        const psychoticismArrayContent: any[] = [];
        const tempData = psychoticismReport.Array[0].content;
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
          psychoticismArrayContent.push(value);
        });
        setPsychoticismArrayData(psychoticismArrayContent);
      }
    } catch (e) {}
  }, []);
  return (
    <>
      {depressionReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).depression_Title}
          top={depressionReport.Top}
          middle={depressionReport.Middle}
          segment={depressionArrayData}
          Position={depressionReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).depression_Pie}
          chartOption={depressionPieChart}
          chartData={depressionPieData}
        />
      )}

      {hostilityReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).hostility_Title}
          top={hostilityReport.Top}
          middle={hostilityReport.Middle}
          segment={hostilityArrayData}
          Position={hostilityReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).hostility_Pie}
          chartOption={hostilityPieChart}
          chartData={hostilityPieData}
        />
      )}

      {somatizationReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).somatization_Title}
          top={somatizationReport.Top}
          middle={somatizationReport.Middle}
          segment={somatizationArrayData}
          Position={somatizationReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).somatization_Pie}
          chartOption={somatizationPieChart}
          chartData={somatizationPieData}
        />
      )}

      {interpersonalSensitivityReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).interpersonal_sensitivity_Title}
          top={interpersonalSensitivityReport.Top}
          middle={interpersonalSensitivityReport.Middle}
          segment={interpersonalSensitivityArrayData}
          Position={interpersonalSensitivityReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).interpersonal_sensitivity_Pie}
          chartOption={interpersonalSensitivityPieChart}
          chartData={interpersonalSensitivityPieData}
        />
      )}

      {paranoidIdeationReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).paranoid_ideation_Title}
          top={paranoidIdeationReport.Top}
          middle={paranoidIdeationReport.Middle}
          segment={paranoidIdeationArrayData}
          Position={paranoidIdeationReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).paranoid_ideation_Pie}
          chartOption={paranoidIdeationPieChart}
          chartData={paranoidIdeationPieData}
        />
      )}

      {obsessiveCompulsionReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).obsessive_compulsion_Title}
          top={obsessiveCompulsionReport.Top}
          middle={obsessiveCompulsionReport.Middle}
          segment={obsessiveCompulsionArrayData}
          Position={obsessiveCompulsionReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).obsessive_compulsion_Pie}
          chartOption={obsessiveCompulsionPieChart}
          chartData={obsessiveCompulsionPieData}
        />
      )}

      {anxietyReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).anxiety_Title}
          top={anxietyReport.Top}
          middle={anxietyReport.Middle}
          segment={anxietyArrayData}
          Position={anxietyReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).anxiety_Pie}
          chartOption={anxietyPieChart}
          chartData={anxietyPieData}
        />
      )}

      {phobicAnxietyReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).phobic_anxiety_Title}
          top={phobicAnxietyReport.Top}
          middle={phobicAnxietyReport.Middle}
          segment={phobicAnxietyArrayData}
          Position={phobicAnxietyReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).phobic_anxiety_Pie}
          chartOption={phobicAnxietyPieChart}
          chartData={phobicAnxietyPieData}
        />
      )}

      {psychoticismReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).psychoticism_Title}
          top={psychoticismReport.Top}
          middle={psychoticismReport.Middle}
          segment={psychoticismArrayData}
          Position={psychoticismReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).psychoticism_Pie}
          chartOption={psychoticismPieChart}
          chartData={psychoticismPieData}
        />
      )}
    </>
  );
}
