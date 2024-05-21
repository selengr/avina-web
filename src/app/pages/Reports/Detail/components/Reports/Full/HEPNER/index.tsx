import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function HepnerReport(props) {
  const problemSolvingConfidencePieChart: any[] = localStorage.problem_solving_confidencePieChart;
  const approachAvoidanceStylePieChart: any[] = localStorage.approach_avoidance_stylePieChart;
  const personalControlPieChart: any[] = localStorage.personal_controlPieChart;

  const problemSolvingConfidenceReport: any = {
    Top: JSON.parse(localStorage.Report).problem_solving_confidence_Top,
    Middle: JSON.parse(localStorage.Report).problem_solving_confidence_Middle,
    Array: JSON.parse(localStorage.Report).problem_solving_confidence_Array,
  };

  const approachAvoidanceStyleReport: any = {
    Top: JSON.parse(localStorage.Report).approach_avoidance_style_Top,
    Middle: JSON.parse(localStorage.Report).approach_avoidance_style_Middle,
    Array: JSON.parse(localStorage.Report).approach_avoidance_style_Array,
  };

  const personalControlReport: any = {
    Top: JSON.parse(localStorage.Report).personal_control_Top,
    Middle: JSON.parse(localStorage.Report).personal_control_Middle,
    Array: JSON.parse(localStorage.Report).personal_control_Array,
  };

  const [problemSolvingConfidenceArrayData, setProblemSolvingConfidenceArrayData] = useState<any[]>([]);
  const [approachAvoidanceStyleArrayData, setApproachAvoidanceStyleArrayData] = useState<any[]>([]);
  const [personalControlArrayData, setPersonalControlArrayData] = useState<any[]>([]);

  const problemSolvingConfidencePieData: any[] = localStorage.problemSolvingConfidencePieData ? JSON.parse(localStorage.problemSolvingConfidencePieData) : [];
  const approachAvoidanceStylePieData: any[] = localStorage.approachAvoidanceStylePieData ? JSON.parse(localStorage.approachAvoidanceStylePieData) : [];
  const personalControlPieData: any[] = localStorage.personalControlPieData ? JSON.parse(localStorage.personalControlPieData) : [];

  useEffect(() => {
    try {
      if (problemSolvingConfidenceReport.Array[0].content) {
        const problemSolvingConfidenceArrayContent: any[] = [];
        const tempData = problemSolvingConfidenceReport.Array[0].content;
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
          problemSolvingConfidenceArrayContent.push(value);
        });
        setProblemSolvingConfidenceArrayData(problemSolvingConfidenceArrayContent);
      }

      if (approachAvoidanceStyleReport.Array[0].content) {
        const approachAvoidanceStyleArrayContent: any[] = [];
        const tempData = approachAvoidanceStyleReport.Array[0].content;
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
          approachAvoidanceStyleArrayContent.push(value);
        });
        setApproachAvoidanceStyleArrayData(approachAvoidanceStyleArrayContent);
      }

      if (personalControlReport.Array[0].content) {
        const personalControlArrayContent: any[] = [];
        const tempData = personalControlReport.Array[0].content;
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
          personalControlArrayContent.push(value);
        });
        setPersonalControlArrayData(personalControlArrayContent);
      }
    } catch (e) {}
  }, []);
  return (
    <>
      {problemSolvingConfidenceReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).problem_solving_confidence_Title}
          top={problemSolvingConfidenceReport.Top}
          middle={problemSolvingConfidenceReport.Middle}
          segment={problemSolvingConfidenceArrayData}
          Position={problemSolvingConfidenceReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).problem_solving_confidence_Pie}
          chartOption={problemSolvingConfidencePieChart}
          chartData={problemSolvingConfidencePieData}
        />
      )}

      {approachAvoidanceStyleReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).approach_avoidance_style_Title}
          top={approachAvoidanceStyleReport.Top}
          middle={approachAvoidanceStyleReport.Middle}
          segment={approachAvoidanceStyleArrayData}
          Position={approachAvoidanceStyleReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).approach_avoidance_style_Pie}
          chartOption={approachAvoidanceStylePieChart}
          chartData={approachAvoidanceStylePieData}
        />
      )}

      {personalControlReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).personal_control_Title}
          top={personalControlReport.Top}
          middle={personalControlReport.Middle}
          segment={personalControlArrayData}
          Position={personalControlReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).personal_control_Pie}
          chartOption={personalControlPieChart}
          chartData={personalControlPieData}
        />
      )}
    </>
  );
}
