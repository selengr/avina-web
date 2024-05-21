import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function OCQReport(props) {
  const affectiveCommitmentPieChart: any[] = localStorage.affectiveCommitmentPieChart;
  const continuanceCommitmentPieChart: any[] = localStorage.continuanceCommitmentPieChart;
  const normativeCommitmentPieChart: any[] = localStorage.normativeCommitmentPieChart;

  const affectiveCommitment_Report: any = {
    Top: JSON.parse(localStorage.Report).affectiveCommitment_Top,
    Middle: JSON.parse(localStorage.Report).affectiveCommitment_Middle,
    Array: JSON.parse(localStorage.Report).affectiveCommitment_Array,
  };
  const continuanceCommitment_Report: any = {
    Top: JSON.parse(localStorage.Report).continuanceCommitment_Top,
    Middle: JSON.parse(localStorage.Report).continuanceCommitment_Middle,
    Array: JSON.parse(localStorage.Report).continuanceCommitment_Array,
  };
  const normativeCommitment_Report: any = {
    Top: JSON.parse(localStorage.Report).normativeCommitment_Top,
    Middle: JSON.parse(localStorage.Report).normativeCommitment_Middle,
    Array: JSON.parse(localStorage.Report).normativeCommitment_Array,
  };

  const [affectiveCommitmentArrayData, setAffectiveCommitmentArrayData] = useState<any[]>([]);
  const [continuanceCommitmentArrayData, setContinuanceCommitmentArrayData] = useState<any[]>([]);
  const [normativeCommitmentArrayData, setNormativeCommitmentArrayData] = useState<any[]>([]);

  const affectiveCommitmentPieData: any[] = localStorage.affectiveCommitmentPieData ? JSON.parse(localStorage.affectiveCommitmentPieData) : [];
  const continuanceCommitmentPieData: any[] = localStorage.continuanceCommitmentPieData ? JSON.parse(localStorage.continuanceCommitmentPieData) : [];
  const normativeCommitmentPieData: any[] = localStorage.normativeCommitmentPieData ? JSON.parse(localStorage.normativeCommitmentPieData) : [];

  useEffect(() => {
    try {
      if (affectiveCommitment_Report.Array[0].content) {
        const affectiveCommitmentArrayContent: any[] = [];
        const tempData = affectiveCommitment_Report.Array[0].content;
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
          affectiveCommitmentArrayContent.push(value);
        });
        setAffectiveCommitmentArrayData(affectiveCommitmentArrayContent);
      }

      if (continuanceCommitment_Report.Array[0].content) {
        const continuanceCommitmentArrayContent: any[] = [];
        const tempData = continuanceCommitment_Report.Array[0].content;
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
          continuanceCommitmentArrayContent.push(value);
        });
        setContinuanceCommitmentArrayData(continuanceCommitmentArrayContent);
      }

      if (normativeCommitment_Report.Array[0].content) {
        const normativeCommitmentArrayContent: any[] = [];
        const tempData = normativeCommitment_Report.Array[0].content;
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
          normativeCommitmentArrayContent.push(value);
        });
        setNormativeCommitmentArrayData(normativeCommitmentArrayContent);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {affectiveCommitment_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).affectiveCommitment_Title}
          top={affectiveCommitment_Report.Top}
          middle={affectiveCommitment_Report.Middle}
          segment={affectiveCommitmentArrayData}
          Position={affectiveCommitment_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).affectiveCommitment_Pie}
          chartOption={affectiveCommitmentPieChart}
          chartData={affectiveCommitmentPieData}
        />
      )}
      {continuanceCommitment_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).continuanceCommitment_Title}
          top={continuanceCommitment_Report.Top}
          middle={continuanceCommitment_Report.Middle}
          segment={continuanceCommitmentArrayData}
          Position={continuanceCommitment_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).continuanceCommitment_Pie}
          chartOption={continuanceCommitmentPieChart}
          chartData={continuanceCommitmentPieData}
        />
      )}
      {normativeCommitment_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).normativeCommitment_Title}
          top={normativeCommitment_Report.Top}
          middle={normativeCommitment_Report.Middle}
          segment={normativeCommitmentArrayData}
          Position={normativeCommitment_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).normativeCommitment_Pie}
          chartOption={normativeCommitmentPieChart}
          chartData={normativeCommitmentPieData}
        />
      )}
    </>
  );
}
