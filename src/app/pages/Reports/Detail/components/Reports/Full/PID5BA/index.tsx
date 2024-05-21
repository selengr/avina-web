import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function PID5BAReport(props) {
  const Negative_AffectPieChart: any[] = localStorage.Negative_AffectPieChart;
  const DetachmentPieChart: any[] = localStorage.DetachmentPieChart;
  const AntagonismPieChart: any[] = localStorage.AntagonismPieChart;
  const DisinhibitionPieChart: any[] = localStorage.DisinhibitionPieChart;
  const PsychoticismPieChart: any[] = localStorage.PsychoticismPieChart;

  const Negative_AffectReport: any = {
    Top: JSON.parse(localStorage.Report).Negative_Affect_Top,
    Middle: JSON.parse(localStorage.Report).Negative_Affect_Middle,
    Array: JSON.parse(localStorage.Report).Negative_Affect_Array,
  };
  const DetachmentReport: any = {
    Top: JSON.parse(localStorage.Report).Detachment_Top,
    Middle: JSON.parse(localStorage.Report).Detachment_Middle,
    Array: JSON.parse(localStorage.Report).Detachment_Array,
  };
  const AntagonismReport: any = {
    Top: JSON.parse(localStorage.Report).Antagonism_Top,
    Middle: JSON.parse(localStorage.Report).Antagonism_Middle,
    Array: JSON.parse(localStorage.Report).Antagonism_Array,
  };
  const DisinhibitionReport: any = {
    Top: JSON.parse(localStorage.Report).Disinhibition_Top,
    Middle: JSON.parse(localStorage.Report).Disinhibition_Middle,
    Array: JSON.parse(localStorage.Report).Disinhibition_Array,
  };
  const PsychoticismReport: any = {
    Top: JSON.parse(localStorage.Report).Psychoticism_Top,
    Middle: JSON.parse(localStorage.Report).Psychoticism_Middle,
    Array: JSON.parse(localStorage.Report).Psychoticism_Array,
  };

  const [NegativeAffectArrayData, setNegativeAffectArrayData] = useState<any[]>([]);
  const [DetachmentArrayData, setDetachmentArrayData] = useState<any[]>([]);
  const [AntagonismArrayData, setAntagonismArrayData] = useState<any[]>([]);
  const [DisinhibitionArrayData, setDisinhibitionArrayData] = useState<any[]>([]);
  const [PsychoticismArrayData, setPsychoticismArrayData] = useState<any[]>([]);

  const Negative_AffectPieData: any[] = localStorage.Negative_AffectPieData ? JSON.parse(localStorage.Negative_AffectPieData) : [];
  const DetachmentPieData: any[] = localStorage.DetachmentPieData ? JSON.parse(localStorage.DetachmentPieData) : [];
  const AntagonismPieData: any[] = localStorage.AntagonismPieData ? JSON.parse(localStorage.AntagonismPieData) : [];
  const DisinhibitionPieData: any[] = localStorage.DisinhibitionPieData ? JSON.parse(localStorage.DisinhibitionPieData) : [];
  const PsychoticismPieData: any[] = localStorage.PsychoticismPieData ? JSON.parse(localStorage.PsychoticismPieData) : [];

  useEffect(() => {
    try {
      if (Negative_AffectReport.Array[0].content) {
        const Negative_AffectArrayContent: any[] = [];
        const tempData = Negative_AffectReport.Array[0].content;
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
          Negative_AffectArrayContent.push(value);
        });
        setNegativeAffectArrayData(Negative_AffectArrayContent);
      }
      if (DetachmentReport.Array[0].content) {
        const DetachmentArrayContent: any[] = [];
        const tempData = DetachmentReport.Array[0].content;
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
          DetachmentArrayContent.push(value);
        });
        setDetachmentArrayData(DetachmentArrayContent);
      }
      if (AntagonismReport.Array[0].content) {
        const AntagonismArrayContent: any[] = [];
        const tempData = AntagonismReport.Array[0].content;
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
          AntagonismArrayContent.push(value);
        });
        setAntagonismArrayData(AntagonismArrayContent);
      }
      if (DisinhibitionReport.Array[0].content) {
        const DisinhibitionArrayContent: any[] = [];
        const tempData = DisinhibitionReport.Array[0].content;
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
          DisinhibitionArrayContent.push(value);
        });
        setDisinhibitionArrayData(DisinhibitionArrayContent);
      }
      if (PsychoticismReport.Array[0].content) {
        const PsychoticismArrayContent: any[] = [];
        const tempData = PsychoticismReport.Array[0].content;
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
          PsychoticismArrayContent.push(value);
        });
        setPsychoticismArrayData(PsychoticismArrayContent);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {Negative_AffectReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).Negative_Affect_Title}
          top={Negative_AffectReport.Top}
          middle={Negative_AffectReport.Middle}
          segment={NegativeAffectArrayData}
          Position={Negative_AffectReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).Negative_Affect_Pie}
          chartOption={Negative_AffectPieChart}
          chartData={Negative_AffectPieData}
        />
      )}
      {DetachmentReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).Detachment_Title}
          top={DetachmentReport.Top}
          middle={DetachmentReport.Middle}
          segment={DetachmentArrayData}
          Position={DetachmentReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).Detachment_Pie}
          chartOption={DetachmentPieChart}
          chartData={DetachmentPieData}
        />
      )}
      {AntagonismReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).Antagonism_Title}
          top={AntagonismReport.Top}
          middle={AntagonismReport.Middle}
          segment={AntagonismArrayData}
          Position={AntagonismReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).Antagonism_Pie}
          chartOption={AntagonismPieChart}
          chartData={AntagonismPieData}
        />
      )}
      {DisinhibitionReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).Disinhibition_Title}
          top={DisinhibitionReport.Top}
          middle={DisinhibitionReport.Middle}
          segment={DisinhibitionArrayData}
          Position={DisinhibitionReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).Disinhibition_Pie}
          chartOption={DisinhibitionPieChart}
          chartData={DisinhibitionPieData}
        />
      )}
      {PsychoticismReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).Psychoticism_Title}
          top={PsychoticismReport.Top}
          middle={PsychoticismReport.Middle}
          segment={PsychoticismArrayData}
          Position={PsychoticismReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).Psychoticism_Pie}
          chartOption={PsychoticismPieChart}
          chartData={PsychoticismPieData}
        />
      )}
    </>
  );
}
