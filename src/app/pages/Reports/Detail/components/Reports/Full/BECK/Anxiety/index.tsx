import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function AnxietyReport(props) {
  const ANSPieChart: any[] = localStorage.ANSPieChart;
  const neuropsychologicalPieChart: any[] = localStorage.neuropsychologicalPieChart;
  const phobiaPieChart: any[] = localStorage.phobiaPieChart;
  const mentalPieChart: any[] = localStorage.mentalPieChart;

  const ANSReport: any = {
    Top: JSON.parse(localStorage.Report).ANS_Top,
    Middle: JSON.parse(localStorage.Report).ANS_Middle,
    Array: JSON.parse(localStorage.Report).ANS_Array,
  };

  const neuropsychologicalReport: any = {
    Top: JSON.parse(localStorage.Report).neuropsychological_Top,
    Middle: JSON.parse(localStorage.Report).neuropsychological_Middle,
    Array: JSON.parse(localStorage.Report).neuropsychological_Array,
  };

  const phobiaReport: any = {
    Top: JSON.parse(localStorage.Report).phobia_Top,
    Middle: JSON.parse(localStorage.Report).phobia_Middle,
    Array: JSON.parse(localStorage.Report).phobia_Array,
  };

  const mentalReport: any = {
    Top: JSON.parse(localStorage.Report).mental_Top,
    Middle: JSON.parse(localStorage.Report).mental_Middle,
    Array: JSON.parse(localStorage.Report).mental_Array,
  };

  const [ANSArrayData, setANSArrayData] = useState<any[]>([]);
  const [neuropsychologicalArrayData, setNeuropsychologicalArrayData] = useState<any[]>([]);
  const [phobiaArrayData, setPhobiaArrayData] = useState<any[]>([]);
  const [mentalArrayData, setMentalArrayData] = useState<any[]>([]);

  const ANSPieData: any[] = localStorage.ANSPieData ? JSON.parse(localStorage.ANSPieData) : [];
  const neuropsychologicalPieData: any[] = localStorage.neuropsychologicalPieData ? JSON.parse(localStorage.neuropsychologicalPieData) : [];
  const phobiaPieData: any[] = localStorage.phobiaPieData ? JSON.parse(localStorage.phobiaPieData) : [];
  const mentalPieData: any[] = localStorage.mentalPieData ? JSON.parse(localStorage.mentalPieData) : [];
  useEffect(() => {
    try {
      if (ANSReport.Array[0].content) {
        const ANSArrayContent: any[] = [];
        const tempData = ANSReport.Array[0].content;
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
          ANSArrayContent.push(value);
        });
        setANSArrayData(ANSArrayContent);
      }
      if (neuropsychologicalReport.Array[0].content) {
        const neuropsychologicalArrayContent: any[] = [];
        const tempData = neuropsychologicalReport.Array[0].content;
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
          neuropsychologicalArrayContent.push(value);
        });
        setNeuropsychologicalArrayData(neuropsychologicalArrayContent);
      }
      if (phobiaReport.Array[0].content) {
        const phobiaArrayContent: any[] = [];
        const tempData = phobiaReport.Array[0].content;
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
          phobiaArrayContent.push(value);
        });
        setPhobiaArrayData(phobiaArrayContent);
      }
      if (mentalReport.Array[0].content) {
        const mentalArrayContent: any[] = [];
        const tempData = mentalReport.Array[0].content;
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
          mentalArrayContent.push(value);
        });
        setMentalArrayData(mentalArrayContent);
      }
    } catch (e) {}
  }, []);
  return (
    <>
      {ANSReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).ANS_Title}
          top={ANSReport.Top}
          middle={ANSReport.Middle}
          segment={ANSArrayData}
          Position={ANSReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).ANS_Pie}
          chartOption={ANSPieChart}
          chartData={ANSPieData}
        />
      )}
      {neuropsychologicalReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).neuropsychological_Title}
          top={neuropsychologicalReport.Top}
          middle={neuropsychologicalReport.Middle}
          segment={neuropsychologicalArrayData}
          Position={neuropsychologicalReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).neuropsychological_Pie}
          chartOption={neuropsychologicalPieChart}
          chartData={neuropsychologicalPieData}
        />
      )}
      {mentalReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).mental_Title}
          top={mentalReport.Top}
          middle={mentalReport.Middle}
          segment={mentalArrayData}
          Position={mentalReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).mental_Pie}
          chartOption={mentalPieChart}
          chartData={mentalPieData}
        />
      )}
      {phobiaReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).phobia_Title}
          top={phobiaReport.Top}
          middle={phobiaReport.Middle}
          segment={phobiaArrayData}
          Position={phobiaReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).phobia_Pie}
          chartOption={phobiaPieChart}
          chartData={phobiaPieData}
        />
      )}
    </>
  );
}
