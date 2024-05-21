import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function EOCReport(props) {
  const multiple_communication_modalitiesPieChart: any[] = localStorage.multiple_communication_modalitiesPieChart;
  const simplifictionPieChart: any[] = localStorage.simplifictionPieChart;
  const active_listeningPieChart: any[] = localStorage.active_listeningPieChart;
  const emotional_controllPieChart: any[] = localStorage.emotional_controllPieChart;
  const feedback_utilizationPieChart: any[] = localStorage.feedback_utilizationPieChart;
  const non_verbal_communicationPieChart: any[] = localStorage.non_verbal_communicationPieChart;

  const multiple_communication_modalities_Report: any = {
    Top: JSON.parse(localStorage.Report).multiple_communication_modalities_Top,
    Middle: JSON.parse(localStorage.Report).multiple_communication_modalities_Middle,
    Array: JSON.parse(localStorage.Report).multiple_communication_modalities_Array,
  };
  const simplifiction_Report: any = {
    Top: JSON.parse(localStorage.Report).simplifiction_Top,
    Middle: JSON.parse(localStorage.Report).simplifiction_Middle,
    Array: JSON.parse(localStorage.Report).simplifiction_Array,
  };
  const active_listening_Report: any = {
    Top: JSON.parse(localStorage.Report).active_listening_Top,
    Middle: JSON.parse(localStorage.Report).active_listening_Middle,
    Array: JSON.parse(localStorage.Report).active_listening_Array,
  };
  const emotional_controll_Report: any = {
    Top: JSON.parse(localStorage.Report).emotional_controll_Top,
    Middle: JSON.parse(localStorage.Report).emotional_controll_Middle,
    Array: JSON.parse(localStorage.Report).emotional_controll_Array,
  };

  const feedback_utilization_Report: any = {
    Top: JSON.parse(localStorage.Report).feedback_utilization_Top,
    Middle: JSON.parse(localStorage.Report).feedback_utilization_Middle,
    Array: JSON.parse(localStorage.Report).feedback_utilization_Array,
  };

  const non_verbal_communication_Report: any = {
    Top: JSON.parse(localStorage.Report).non_verbal_communication_Top,
    Middle: JSON.parse(localStorage.Report).non_verbal_communication_Middle,
    Array: JSON.parse(localStorage.Report).non_verbal_communication_Array,
  };

  const [multipleCommunicationModalitiesArrayData, setMultipleCommunicationModalitiesArrayData] = useState<any[]>([]);
  const [simplifictionArrayData, setSimplifictionArrayData] = useState<any[]>([]);
  const [activeListeningArrayData, setActiveListeningArrayData] = useState<any[]>([]);
  const [emotionalControllArrayData, setEmotionalControllArrayData] = useState<any[]>([]);
  const [feedbackUtilizationArrayData, setFeedbackUtilizationArrayData] = useState<any[]>([]);
  const [nonVerbalCommunicationArrayData, setNonVerbalCommunicationArrayData] = useState<any[]>([]);

  const multiple_communication_modalitiesPieData: any[] = localStorage.multiple_communication_modalitiesPieData ? JSON.parse(localStorage.multiple_communication_modalitiesPieData) : [];
  const simplifictionPieData: any[] = localStorage.simplifictionPieData ? JSON.parse(localStorage.simplifictionPieData) : [];
  const active_listeningPieData: any[] = localStorage.active_listeningPieData ? JSON.parse(localStorage.active_listeningPieData) : [];
  const emotional_controllPieData: any[] = localStorage.emotional_controllPieData ? JSON.parse(localStorage.emotional_controllPieData) : [];
  const feedback_utilizationPieData: any[] = localStorage.feedback_utilizationPieData ? JSON.parse(localStorage.feedback_utilizationPieData) : [];
  const non_verbal_communicationPieData: any[] = localStorage.non_verbal_communicationPieData ? JSON.parse(localStorage.non_verbal_communicationPieData) : [];

  useEffect(() => {
    try {
      if (multiple_communication_modalities_Report.Array[0].content) {
        const multipleCommunicationModalitiesArrayContent: any[] = [];
        const tempData = multiple_communication_modalities_Report.Array[0].content;
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
          multipleCommunicationModalitiesArrayContent.push(value);
        });
        setMultipleCommunicationModalitiesArrayData(multipleCommunicationModalitiesArrayContent);
      }
      if (simplifiction_Report.Array[0].content) {
        const simplifictiontArrayContent: any[] = [];
        const tempData = simplifiction_Report.Array[0].content;
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
          simplifictiontArrayContent.push(value);
        });
        setSimplifictionArrayData(simplifictiontArrayContent);
      }

      if (active_listening_Report.Array[0].content) {
        const activeListeningArrayContent: any[] = [];
        const tempData = active_listening_Report.Array[0].content;
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
          activeListeningArrayContent.push(value);
        });
        setActiveListeningArrayData(activeListeningArrayContent);
      }

      if (emotional_controll_Report.Array[0].content) {
        const emotionalControllArrayContent: any[] = [];
        const tempData = emotional_controll_Report.Array[0].content;
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
          emotionalControllArrayContent.push(value);
        });
        setEmotionalControllArrayData(emotionalControllArrayContent);
      }

      if (feedback_utilization_Report.Array[0].content) {
        const feedbackUtilizationDataContent: any[] = [];
        const tempData = feedback_utilization_Report.Array[0].content;
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
          feedbackUtilizationDataContent.push(value);
        });
        setFeedbackUtilizationArrayData(feedbackUtilizationDataContent);
      }

      if (non_verbal_communication_Report.Array[0].content) {
        const nonVerbalCommunicationDataContent: any[] = [];
        const tempData = non_verbal_communication_Report.Array[0].content;
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
          nonVerbalCommunicationDataContent.push(value);
        });
        setNonVerbalCommunicationArrayData(nonVerbalCommunicationDataContent);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {multiple_communication_modalities_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).multiple_communication_modalities_Title}
          top={multiple_communication_modalities_Report.Top}
          middle={multiple_communication_modalities_Report.Middle}
          segment={multipleCommunicationModalitiesArrayData}
          Position={multiple_communication_modalities_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).multiple_communication_modalities_Pie}
          chartOption={multiple_communication_modalitiesPieChart}
          chartData={multiple_communication_modalitiesPieData}
        />
      )}
      {simplifiction_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).simplifiction_Title}
          top={simplifiction_Report.Top}
          middle={simplifiction_Report.Middle}
          segment={simplifictionArrayData}
          Position={simplifiction_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).simplifiction_Pie}
          chartOption={simplifictionPieChart}
          chartData={simplifictionPieData}
        />
      )}
      {active_listening_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).active_listening_Title}
          top={active_listening_Report.Top}
          middle={active_listening_Report.Middle}
          segment={activeListeningArrayData}
          Position={active_listening_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).active_listening_Pie}
          chartOption={active_listeningPieChart}
          chartData={active_listeningPieData}
        />
      )}
      {emotional_controll_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).emotional_controll_Title}
          top={emotional_controll_Report.Top}
          middle={emotional_controll_Report.Middle}
          segment={emotionalControllArrayData}
          Position={emotional_controll_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).emotional_controll_Pie}
          chartOption={emotional_controllPieChart}
          chartData={emotional_controllPieData}
        />
      )}
      {feedback_utilization_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).feedback_utilization_Title}
          top={feedback_utilization_Report.Top}
          middle={feedback_utilization_Report.Middle}
          segment={feedbackUtilizationArrayData}
          Position={feedback_utilization_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).feedback_utilization_Pie}
          chartOption={feedback_utilizationPieChart}
          chartData={feedback_utilizationPieData}
        />
      )}
      {non_verbal_communication_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).non_verbal_communication_Title}
          top={non_verbal_communication_Report.Top}
          middle={non_verbal_communication_Report.Middle}
          segment={nonVerbalCommunicationArrayData}
          Position={non_verbal_communication_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).non_verbal_communication_Pie}
          chartOption={non_verbal_communicationPieChart}
          chartData={non_verbal_communicationPieData}
        />
      )}
    </>
  );
}
