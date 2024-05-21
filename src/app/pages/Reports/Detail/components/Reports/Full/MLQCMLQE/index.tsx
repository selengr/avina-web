import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function MLQCMLQEReport(props) {
  const ideal_featuresPieChart: any[] = localStorage.ideal_featuresPieChart;
  const ideal_behaviorsPieChart: any[] = localStorage.ideal_behaviorsPieChart;
  const mental_motivationPieChart: any[] = localStorage.mental_motivationPieChart;
  const inspirational_motivationPieChart: any[] = localStorage.inspirational_motivationPieChart;
  const individualized_attentionPieChart: any[] = localStorage.individualized_attentionPieChart;
  const contingent_rewardsPieChart: any[] = localStorage.contingent_rewardsPieChart;
  const active_managementPieChart: any[] = localStorage.active_managementPieChart;
  const passive_managementPieChart: any[] = localStorage.passive_managementPieChart;
  const no_interventionPieChart: any[] = localStorage.no_interventionPieChart;

  const ideal_featuresReport: any = {
    Top: JSON.parse(localStorage.Report).ideal_features_Top,
    Middle: JSON.parse(localStorage.Report).ideal_features_Middle,
    Array: JSON.parse(localStorage.Report).ideal_features_Array,
  };

  const ideal_behaviorsReport: any = {
    Top: JSON.parse(localStorage.Report).ideal_behaviors_Top,
    Middle: JSON.parse(localStorage.Report).ideal_behaviors_Middle,
    Array: JSON.parse(localStorage.Report).ideal_behaviors_Array,
  };

  const mental_motivationReport: any = {
    Top: JSON.parse(localStorage.Report).mental_motivation_Top,
    Middle: JSON.parse(localStorage.Report).mental_motivation_Middle,
    Array: JSON.parse(localStorage.Report).mental_motivation_Array,
  };

  const inspirational_motivationReport: any = {
    Top: JSON.parse(localStorage.Report).inspirational_motivation_Top,
    Middle: JSON.parse(localStorage.Report).inspirational_motivation_Middle,
    Array: JSON.parse(localStorage.Report).inspirational_motivation_Array,
  };

  const individualized_attentionReport: any = {
    Top: JSON.parse(localStorage.Report).individualized_attention_Top,
    Middle: JSON.parse(localStorage.Report).individualized_attention_Middle,
    Array: JSON.parse(localStorage.Report).individualized_attention_Array,
  };

  const contingent_rewardsReport: any = {
    Top: JSON.parse(localStorage.Report).contingent_rewards_Top,
    Middle: JSON.parse(localStorage.Report).contingent_rewards_Middle,
    Array: JSON.parse(localStorage.Report).contingent_rewards_Array,
  };

  const active_managementReport: any = {
    Top: JSON.parse(localStorage.Report).active_management_Top,
    Middle: JSON.parse(localStorage.Report).active_management_Middle,
    Array: JSON.parse(localStorage.Report).active_management_Array,
  };

  const passive_managementReport: any = {
    Top: JSON.parse(localStorage.Report).passive_management_Top,
    Middle: JSON.parse(localStorage.Report).passive_management_Middle,
    Array: JSON.parse(localStorage.Report).passive_management_Array,
  };

  const no_interventionReport: any = {
    Top: JSON.parse(localStorage.Report).no_intervention_Top,
    Middle: JSON.parse(localStorage.Report).no_intervention_Middle,
    Array: JSON.parse(localStorage.Report).no_intervention_Array,
  };

  const [ideal_featuresArrayData, setIdeal_featuresArrayData] = useState<any[]>([]);
  const [ideal_behaviorsArrayData, setIdeal_behaviorsArrayData] = useState<any[]>([]);
  const [mental_motivationArrayData, setMental_motivationArrayData] = useState<any[]>([]);
  const [inspirational_motivationArrayData, setInspirational_motivationArrayData] = useState<any[]>([]);
  const [individualized_attentionArrayData, setIndividualized_attentionArrayData] = useState<any[]>([]);
  const [contingent_rewardsArrayData, setContingent_rewardsArrayData] = useState<any[]>([]);
  const [active_managementArrayData, setActive_managementArrayData] = useState<any[]>([]);
  const [passive_managementArrayData, setPassive_managementArrayData] = useState<any[]>([]);
  const [no_interventionArrayData, setNo_interventionArrayData] = useState<any[]>([]);

  const ideal_featuresPieData: any[] = localStorage.ideal_featuresPieData ? JSON.parse(localStorage.ideal_featuresPieData) : [];
  const ideal_behaviorsPieData: any[] = localStorage.ideal_behaviorsPieData ? JSON.parse(localStorage.ideal_behaviorsPieData) : [];
  const mental_motivationPieData: any[] = localStorage.mental_motivationPieData ? JSON.parse(localStorage.mental_motivationPieData) : [];
  const inspirational_motivationPieData: any[] = localStorage.inspirational_motivationPieData ? JSON.parse(localStorage.inspirational_motivationPieData) : [];
  const individualized_attentionPieData: any[] = localStorage.individualized_attentionPieData ? JSON.parse(localStorage.individualized_attentionPieData) : [];
  const contingent_rewardsPieData: any[] = localStorage.contingent_rewardsPieData ? JSON.parse(localStorage.contingent_rewardsPieData) : [];
  const active_managementPieData: any[] = localStorage.active_managementPieData ? JSON.parse(localStorage.active_managementPieData) : [];
  const passive_managementPieData: any[] = localStorage.passive_managementPieData ? JSON.parse(localStorage.passive_managementPieData) : [];
  const no_interventionPieData: any[] = localStorage.no_interventionPieData ? JSON.parse(localStorage.no_interventionPieData) : [];

  useEffect(() => {
    try {
      if (ideal_featuresReport.Array[0].content) {
        const ideal_featuresArrayContent: any[] = [];
        const tempData = ideal_featuresReport.Array[0].content;
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
          ideal_featuresArrayContent.push(value);
        });
        setIdeal_featuresArrayData(ideal_featuresArrayContent);
      }

      if (ideal_behaviorsReport.Array[0].content) {
        const ideal_behaviorsArrayContent: any[] = [];
        const tempData = ideal_behaviorsReport.Array[0].content;
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
          ideal_behaviorsArrayContent.push(value);
        });
        setIdeal_behaviorsArrayData(ideal_behaviorsArrayContent);
      }

      if (mental_motivationReport.Array[0].content) {
        const mental_motivationArrayContent: any[] = [];
        const tempData = mental_motivationReport.Array[0].content;
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
          mental_motivationArrayContent.push(value);
        });
        setMental_motivationArrayData(mental_motivationArrayContent);
      }

      if (inspirational_motivationReport.Array[0].content) {
        const inspirational_motivationArrayContent: any[] = [];
        const tempData = inspirational_motivationReport.Array[0].content;
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
          inspirational_motivationArrayContent.push(value);
        });
        setInspirational_motivationArrayData(inspirational_motivationArrayContent);
      }

      if (individualized_attentionReport.Array[0].content) {
        const individualized_attentionArrayContent: any[] = [];
        const tempData = individualized_attentionReport.Array[0].content;
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
          individualized_attentionArrayContent.push(value);
        });
        setIndividualized_attentionArrayData(individualized_attentionArrayContent);
      }

      if (contingent_rewardsReport.Array[0].content) {
        const contingent_rewardsArrayContent: any[] = [];
        const tempData = contingent_rewardsReport.Array[0].content;
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
          contingent_rewardsArrayContent.push(value);
        });
        setContingent_rewardsArrayData(contingent_rewardsArrayContent);
      }

      if (active_managementReport.Array[0].content) {
        const active_managementArrayContent: any[] = [];
        const tempData = active_managementReport.Array[0].content;
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
          active_managementArrayContent.push(value);
        });
        setActive_managementArrayData(active_managementArrayContent);
      }

      if (passive_managementReport.Array[0].content) {
        const passive_managementArrayContent: any[] = [];
        const tempData = passive_managementReport.Array[0].content;
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
          passive_managementArrayContent.push(value);
        });
        setPassive_managementArrayData(passive_managementArrayContent);
      }

      if (no_interventionReport.Array[0].content) {
        const no_interventionArrayContent: any[] = [];
        const tempData = no_interventionReport.Array[0].content;
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
          no_interventionArrayContent.push(value);
        });
        setNo_interventionArrayData(no_interventionArrayContent);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {ideal_featuresReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).ideal_features_Title}
          top={ideal_featuresReport.Top}
          middle={ideal_featuresReport.Middle}
          segment={ideal_featuresArrayData}
          Position={ideal_featuresReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).ideal_features_Pie}
          chartOption={ideal_featuresPieChart}
          chartData={ideal_featuresPieData}
        />
      )}
      {ideal_behaviorsReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).ideal_behaviors_Title}
          top={ideal_behaviorsReport.Top}
          middle={ideal_behaviorsReport.Middle}
          segment={ideal_behaviorsArrayData}
          Position={ideal_behaviorsReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).ideal_behaviors_Pie}
          chartOption={ideal_behaviorsPieChart}
          chartData={ideal_behaviorsPieData}
        />
      )}
      {mental_motivationReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).mental_motivation_Title}
          top={mental_motivationReport.Top}
          middle={mental_motivationReport.Middle}
          segment={mental_motivationArrayData}
          Position={mental_motivationReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).mental_motivation_Pie}
          chartOption={mental_motivationPieChart}
          chartData={mental_motivationPieData}
        />
      )}
      {inspirational_motivationReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).inspirational_motivation_Title}
          top={inspirational_motivationReport.Top}
          middle={inspirational_motivationReport.Middle}
          segment={inspirational_motivationArrayData}
          Position={inspirational_motivationReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).inspirational_motivation_Pie}
          chartOption={inspirational_motivationPieChart}
          chartData={inspirational_motivationPieData}
        />
      )}
      {individualized_attentionReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).individualized_attention_Title}
          top={individualized_attentionReport.Top}
          middle={individualized_attentionReport.Middle}
          segment={individualized_attentionArrayData}
          Position={individualized_attentionReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).individualized_attention_Pie}
          chartOption={individualized_attentionPieChart}
          chartData={individualized_attentionPieData}
        />
      )}
      {contingent_rewardsReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).contingent_rewards_Title}
          top={contingent_rewardsReport.Top}
          middle={contingent_rewardsReport.Middle}
          segment={contingent_rewardsArrayData}
          Position={contingent_rewardsReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).contingent_rewards_Pie}
          chartOption={contingent_rewardsPieChart}
          chartData={contingent_rewardsPieData}
        />
      )}
      {active_managementReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).active_management_Title}
          top={active_managementReport.Top}
          middle={active_managementReport.Middle}
          segment={active_managementArrayData}
          Position={active_managementReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).active_management_Pie}
          chartOption={active_managementPieChart}
          chartData={active_managementPieData}
        />
      )}
      {passive_managementReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).passive_management_Title}
          top={passive_managementReport.Top}
          middle={passive_managementReport.Middle}
          segment={passive_managementArrayData}
          Position={passive_managementReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).passive_management_Pie}
          chartOption={passive_managementPieChart}
          chartData={passive_managementPieData}
        />
      )}
      {no_interventionReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).no_intervention_Title}
          top={no_interventionReport.Top}
          middle={no_interventionReport.Middle}
          segment={no_interventionArrayData}
          Position={no_interventionReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).no_intervention_Pie}
          chartOption={no_interventionPieChart}
          chartData={no_interventionPieData}
        />
      )}
    </>
  );
}
