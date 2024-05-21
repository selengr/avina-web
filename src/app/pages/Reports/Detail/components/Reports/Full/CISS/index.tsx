import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function CISSReport(props) {
  const task_oriented_strategyPieChart: any[] = localStorage.task_oriented_strategyPieChart;
  const emotion_oriented_strategyPieChart: any[] = localStorage.emotion_oriented_strategyPieChart;
  const avoidance_oriented_strategyPieChart: any[] = localStorage.avoidance_oriented_strategyPieChart;

  const task_oriented_strategy_Report: any = {
    Top: JSON.parse(localStorage.Report).task_oriented_strategy_Top,
    Middle: JSON.parse(localStorage.Report).task_oriented_strategy_Middle,
    Array: JSON.parse(localStorage.Report).task_oriented_strategy_Array,
  };

  const emotion_oriented_strategy_Report: any = {
    Top: JSON.parse(localStorage.Report).emotion_oriented_strategy_Top,
    Middle: JSON.parse(localStorage.Report).emotion_oriented_strategy_Middle,
    Array: JSON.parse(localStorage.Report).emotion_oriented_strategy_Array,
  };
  const avoidance_oriented_strategy_Report: any = {
    Top: JSON.parse(localStorage.Report).avoidance_oriented_strategy_Top,
    Middle: JSON.parse(localStorage.Report).avoidance_oriented_strategy_Middle,
    Array: JSON.parse(localStorage.Report).avoidance_oriented_strategy_Array,
  };

  const [taskOrientedStrategyArrayData, setTaskOrientedStrategyArrayData] = useState<any[]>([]);
  const [emotionOrientedStrategyArrayData, setEmotionOrientedStrategyArrayData] = useState<any[]>([]);
  const [avoidanceOrientedStrategyArrayData, setAvoidanceOrientedStrategyArrayData] = useState<any[]>([]);

  const task_oriented_strategyPieData: any[] = localStorage.task_oriented_strategyPieData ? JSON.parse(localStorage.task_oriented_strategyPieData) : [];
  const emotion_oriented_strategyPieData: any[] = localStorage.emotion_oriented_strategyPieData ? JSON.parse(localStorage.emotion_oriented_strategyPieData) : [];
  const avoidanceOrientedStrategyPieData: any[] = localStorage.avoidance_oriented_strategyPieData ? JSON.parse(localStorage.avoidance_oriented_strategyPieData) : [];

  useEffect(() => {
    try {
      if (task_oriented_strategy_Report.Array[0].content) {
        const taskOrientedStrategyArrayContent: any[] = [];
        const tempData = task_oriented_strategy_Report.Array[0].content;
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
          taskOrientedStrategyArrayContent.push(value);
        });
        setTaskOrientedStrategyArrayData(taskOrientedStrategyArrayContent);
      }

      if (emotion_oriented_strategy_Report.Array[0].content) {
        const emotionOrientedStrategyArrayDataContent: any[] = [];
        const tempData = emotion_oriented_strategy_Report.Array[0].content;
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
          emotionOrientedStrategyArrayDataContent.push(value);
        });
        setEmotionOrientedStrategyArrayData(emotionOrientedStrategyArrayDataContent);
      }

      if (avoidance_oriented_strategy_Report.Array[0].content) {
        const avoidanceOrientedStrategyDataContent: any[] = [];
        const tempData = avoidance_oriented_strategy_Report.Array[0].content;
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
          avoidanceOrientedStrategyDataContent.push(value);
        });
        setAvoidanceOrientedStrategyArrayData(avoidanceOrientedStrategyDataContent);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {task_oriented_strategy_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).task_oriented_strategy_Title}
          top={task_oriented_strategy_Report.Top}
          middle={task_oriented_strategy_Report.Middle}
          segment={taskOrientedStrategyArrayData}
          Position={task_oriented_strategy_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).task_oriented_strategy_Pie}
          chartOption={task_oriented_strategyPieChart}
          chartData={task_oriented_strategyPieData}
        />
      )}
      {emotion_oriented_strategy_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).emotion_oriented_strategy_Title}
          top={emotion_oriented_strategy_Report.Top}
          middle={emotion_oriented_strategy_Report.Middle}
          segment={emotionOrientedStrategyArrayData}
          Position={emotion_oriented_strategy_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).emotion_oriented_strategy_Pie}
          chartOption={emotion_oriented_strategyPieChart}
          chartData={emotion_oriented_strategyPieData}
        />
      )}
      {avoidance_oriented_strategy_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).avoidance_oriented_strategy_Title}
          top={avoidance_oriented_strategy_Report.Top}
          middle={avoidance_oriented_strategy_Report.Middle}
          segment={avoidanceOrientedStrategyArrayData}
          Position={avoidance_oriented_strategy_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).avoidance_oriented_strategy_Pie}
          chartOption={avoidance_oriented_strategyPieChart}
          chartData={avoidanceOrientedStrategyPieData}
        />
      )}
    </>
  );
}
