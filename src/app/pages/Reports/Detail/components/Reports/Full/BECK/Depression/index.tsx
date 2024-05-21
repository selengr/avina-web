import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function DepressionReport(props) {
  const cognitivePieChart: any[] = localStorage.cognitivePieChart;
  const emotionalPieChart: any[] = localStorage.emotionalPieChart;

  const cognitiveReport: any = {
    Top: JSON.parse(localStorage.Report).cognitive_Top,
    Middle: JSON.parse(localStorage.Report).cognitive_Middle,
    Array: JSON.parse(localStorage.Report).cognitive_Array,
  };

  const emotionalReport: any = {
    Top: JSON.parse(localStorage.Report).emotional_Top,
    Middle: JSON.parse(localStorage.Report).emotional_Middle,
    Array: JSON.parse(localStorage.Report).emotional_Array,
  };

  const [cognitiveArrayData, setCognitiveArrayData] = useState<any[]>([]);
  const [emotionalArrayData, setEmotionalArrayData] = useState<any[]>([]);

  const cognitivePieData: any[] = localStorage.cognitivePieData ? JSON.parse(localStorage.cognitivePieData) : [];
  const emotionalPieData: any[] = localStorage.emotionalPieData ? JSON.parse(localStorage.emotionalPieData) : [];
  useEffect(() => {
    try {
      if (cognitiveReport.Array[0].content) {
        const cognitiveArrayContent: any[] = [];
        const tempData = cognitiveReport.Array[0].content;
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
          cognitiveArrayContent.push(value);
        });
        setCognitiveArrayData(cognitiveArrayContent);
      }

      if (emotionalReport.Array[0].content) {
        const emotionalArrayDataContent: any[] = [];
        const tempData = emotionalReport.Array[0].content;
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
          emotionalArrayDataContent.push(value);
        });
        setEmotionalArrayData(emotionalArrayDataContent);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {cognitiveReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).cognitive_Title}
          top={cognitiveReport.Top}
          middle={cognitiveReport.Middle}
          segment={cognitiveArrayData}
          Position={cognitiveReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).cognitive_Pie}
          chartOption={cognitivePieChart}
          chartData={cognitivePieData}
        />
      )}
      {emotionalReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).emotional_Title}
          top={emotionalReport.Top}
          middle={emotionalReport.Middle}
          segment={emotionalArrayData}
          Position={emotionalReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).emotional_Pie}
          chartOption={emotionalPieChart}
          chartData={emotionalPieData}
        />
      )}
    </>
  );
}
