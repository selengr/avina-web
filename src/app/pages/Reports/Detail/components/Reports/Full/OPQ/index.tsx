import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function OPQReport(props) {
  const InefficiencyPieChart: any[] = localStorage.InefficiencyPieChart;
  const Mental_PerturbationPieChart: any[] = localStorage.Mental_PerturbationPieChart;
  const Task_AversionPieChart: any[] = localStorage.Task_AversionPieChart;

  const Inefficiency_Report: any = {
    Top: JSON.parse(localStorage.Report).Inefficiency_Top,
    Middle: JSON.parse(localStorage.Report).Inefficiency_Middle,
    Array: JSON.parse(localStorage.Report).Inefficiency_Array,
  };
  const Mental_Perturbation_Report: any = {
    Top: JSON.parse(localStorage.Report).Mental_Perturbation_Top,
    Middle: JSON.parse(localStorage.Report).Mental_Perturbation_Middle,
    Array: JSON.parse(localStorage.Report).Mental_Perturbation_Array,
  };
  const Task_Aversion_Report: any = {
    Top: JSON.parse(localStorage.Report).Task_Aversion_Top,
    Middle: JSON.parse(localStorage.Report).Task_Aversion_Middle,
    Array: JSON.parse(localStorage.Report).Task_Aversion_Array,
  };

  const [InefficiencyArrayData, setInefficiencyArrayData] = useState<any[]>([]);
  const [MentalPerturbationArrayData, setMentalPerturbationArrayData] = useState<any[]>([]);
  const [TaskAversionArrayData, setTaskAversionArrayData] = useState<any[]>([]);

  const InefficiencyPieData: any[] = localStorage.InefficiencyPieData ? JSON.parse(localStorage.InefficiencyPieData) : [];
  const MentalPerturbationPieData: any[] = localStorage.Mental_PerturbationPieData ? JSON.parse(localStorage.Mental_PerturbationPieData) : [];
  const TaskAversionPieData: any[] = localStorage.Task_AversionPieData ? JSON.parse(localStorage.Task_AversionPieData) : [];

  useEffect(() => {
    try {
      if (Inefficiency_Report.Array[0].content) {
        const InefficiencyArrayContent: any[] = [];
        const tempData = Inefficiency_Report.Array[0].content;
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
          InefficiencyArrayContent.push(value);
        });
        setInefficiencyArrayData(InefficiencyArrayContent);
      }

      if (Mental_Perturbation_Report.Array[0].content) {
        const MentalPerturbationArrayDataContent: any[] = [];
        const tempData = Mental_Perturbation_Report.Array[0].content;
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
          MentalPerturbationArrayDataContent.push(value);
        });
        setMentalPerturbationArrayData(MentalPerturbationArrayDataContent);
      }

      if (Task_Aversion_Report.Array[0].content) {
        const TaskAversionDataContent: any[] = [];
        const tempData = Task_Aversion_Report.Array[0].content;
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
          TaskAversionDataContent.push(value);
        });
        setTaskAversionArrayData(TaskAversionDataContent);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {Task_Aversion_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).Task_Aversion_Title}
          top={Task_Aversion_Report.Top}
          middle={Task_Aversion_Report.Middle}
          segment={TaskAversionArrayData}
          Position={Task_Aversion_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).Task_Aversion_Pie}
          chartOption={Task_AversionPieChart}
          chartData={TaskAversionPieData}
        />
      )}
      {Inefficiency_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).Inefficiency_Title}
          top={Inefficiency_Report.Top}
          middle={Inefficiency_Report.Middle}
          segment={InefficiencyArrayData}
          Position={Inefficiency_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).Inefficiency_Pie}
          chartOption={InefficiencyPieChart}
          chartData={InefficiencyPieData}
        />
      )}
      {Mental_Perturbation_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).Mental_Perturbation_Title}
          top={Mental_Perturbation_Report.Top}
          middle={Mental_Perturbation_Report.Middle}
          segment={MentalPerturbationArrayData}
          Position={Mental_Perturbation_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).Mental_Perturbation_Pie}
          chartOption={Mental_PerturbationPieChart}
          chartData={MentalPerturbationPieData}
        />
      )}
    </>
  );
}
