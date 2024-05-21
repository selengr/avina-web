import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function ODQReport(props) {
  const purposesPieChart: any[] = localStorage.purposesPieChart;
  const structurePieChart: any[] = localStorage.structurePieChart;
  const leadershipPieChart: any[] = localStorage.leadershipPieChart;
  const relationshipsPieChart: any[] = localStorage.relationshipsPieChart;
  const rewardsPieChart: any[] = localStorage.rewardsPieChart;
  const helpfulMechanismsPieChart: any[] = localStorage.helpfulMechanismsPieChart;
  const attitudesForChangePieChart: any[] = localStorage.attitudesForChangePieChart;

  const purposes_Report: any = {
    Top: JSON.parse(localStorage.Report).purposes_Top,
    Middle: JSON.parse(localStorage.Report).purposes_Middle,
    Array: JSON.parse(localStorage.Report).purposes_Array,
  };

  const structure_Report: any = {
    Top: JSON.parse(localStorage.Report).structure_Top,
    Middle: JSON.parse(localStorage.Report).structure_Middle,
    Array: JSON.parse(localStorage.Report).structure_Array,
  };
  const leadership_Report: any = {
    Top: JSON.parse(localStorage.Report).leadership_Top,
    Middle: JSON.parse(localStorage.Report).leadership_Middle,
    Array: JSON.parse(localStorage.Report).leadership_Array,
  };
  const relationships_Report: any = {
    Top: JSON.parse(localStorage.Report).relationships_Top,
    Middle: JSON.parse(localStorage.Report).relationships_Middle,
    Array: JSON.parse(localStorage.Report).relationships_Array,
  };
  const rewards_Report: any = {
    Top: JSON.parse(localStorage.Report).rewards_Top,
    Middle: JSON.parse(localStorage.Report).rewards_Middle,
    Array: JSON.parse(localStorage.Report).rewards_Array,
  };
  const helpfulMechanisms_Report: any = {
    Top: JSON.parse(localStorage.Report).rewards_Top,
    Middle: JSON.parse(localStorage.Report).rewards_Middle,
    Array: JSON.parse(localStorage.Report).helpfulMechanisms_Array,
  };
  const attitudesForChange_Report: any = {
    Top: JSON.parse(localStorage.Report).attitudesForChange_Top,
    Middle: JSON.parse(localStorage.Report).attitudesForChange_Middle,
    Array: JSON.parse(localStorage.Report).attitudesForChange_Array,
  };

  const [purposesArrayData, setPurposesArrayData] = useState<any[]>([]);
  const [structureArrayData, setStructureArrayData] = useState<any[]>([]);
  const [leadershipArrayData, setLeadershipArrayData] = useState<any[]>([]);
  const [relationshipsArrayData, setRelationshipsArrayData] = useState<any[]>([]);
  const [rewardsArrayData, setRewardsArrayData] = useState<any[]>([]);
  const [helpfulMechanismsArrayData, setHelpfulMechanismsArrayData] = useState<any[]>([]);
  const [attitudesForChangeArrayData, setAttitudesForChangeArrayData] = useState<any[]>([]);

  const purposesPieData: any[] = localStorage.purposesPieData ? JSON.parse(localStorage.purposesPieData) : [];
  const structurePieData: any[] = localStorage.structurePieData ? JSON.parse(localStorage.structurePieData) : [];
  const leadershipPieData: any[] = localStorage.leadershipPieData ? JSON.parse(localStorage.leadershipPieData) : [];
  const relationshipsPieData: any[] = localStorage.relationshipsPieData ? JSON.parse(localStorage.relationshipsPieData) : [];
  const rewardsPieData: any[] = localStorage.rewardsPieData ? JSON.parse(localStorage.rewardsPieData) : [];
  const helpfulMechanismsPieData: any[] = localStorage.helpfulMechanismsPieData ? JSON.parse(localStorage.helpfulMechanismsPieData) : [];
  const attitudesForChangePieData: any[] = localStorage.attitudesForChangePieData ? JSON.parse(localStorage.attitudesForChangePieData) : [];

  useEffect(() => {
    try {
      if (purposes_Report.Array[0].content) {
        const purposesArrayContent: any[] = [];
        const tempData = purposes_Report.Array[0].content;
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
          purposesArrayContent.push(value);
        });
        setPurposesArrayData(purposesArrayContent);
      }

      if (structure_Report.Array[0].content) {
        const structureArrayDataContent: any[] = [];
        const tempData = structure_Report.Array[0].content;
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
          structureArrayDataContent.push(value);
        });
        setStructureArrayData(structureArrayDataContent);
      }

      if (leadership_Report.Array[0].content) {
        const leadershipDataContent: any[] = [];
        const tempData = leadership_Report.Array[0].content;
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
          leadershipDataContent.push(value);
        });
        setLeadershipArrayData(leadershipDataContent);
      }
      if (relationships_Report.Array[0].content) {
        const relationshipsDataContent: any[] = [];
        const tempData = relationships_Report.Array[0].content;
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
          relationshipsDataContent.push(value);
        });
        setRelationshipsArrayData(relationshipsDataContent);
      }
      if (rewards_Report.Array[0].content) {
        const rewardsDataContent: any[] = [];
        const tempData = rewards_Report.Array[0].content;
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
          rewardsDataContent.push(value);
        });
        setRewardsArrayData(rewardsDataContent);
      }
      if (helpfulMechanisms_Report.Array[0].content) {
        const helpfulMechanismsDataContent: any[] = [];
        const tempData = helpfulMechanisms_Report.Array[0].content;
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
          helpfulMechanismsDataContent.push(value);
        });
        setHelpfulMechanismsArrayData(helpfulMechanismsDataContent);
      }
      if (attitudesForChange_Report.Array[0].content) {
        const attitudesForChangeDataContent: any[] = [];
        const tempData = attitudesForChange_Report.Array[0].content;
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
          attitudesForChangeDataContent.push(value);
        });
        setAttitudesForChangeArrayData(attitudesForChangeDataContent);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {purposes_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).purposes_Title}
          top={purposes_Report.Top}
          middle={purposes_Report.Middle}
          segment={purposesArrayData}
          Position={purposes_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).purposes_Pie}
          chartOption={purposesPieChart}
          chartData={purposesPieData}
        />
      )}
      {structure_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).structure_Title}
          top={structure_Report.Top}
          middle={structure_Report.Middle}
          segment={structureArrayData}
          Position={structure_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).structure_Pie}
          chartOption={structurePieChart}
          chartData={structurePieData}
        />
      )}
      {leadership_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).leadership_Title}
          top={leadership_Report.Top}
          middle={leadership_Report.Middle}
          segment={leadershipArrayData}
          Position={leadership_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).leadership_Pie}
          chartOption={leadershipPieChart}
          chartData={leadershipPieData}
        />
      )}
      {relationships_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).relationships_Title}
          top={relationships_Report.Top}
          middle={relationships_Report.Middle}
          segment={relationshipsArrayData}
          Position={relationships_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).relationships_Pie}
          chartOption={relationshipsPieChart}
          chartData={relationshipsPieData}
        />
      )}
      {rewards_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).rewards_Title}
          top={rewards_Report.Top}
          middle={rewards_Report.Middle}
          segment={rewardsArrayData}
          Position={rewards_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).rewards_Pie}
          chartOption={rewardsPieChart}
          chartData={rewardsPieData}
        />
      )}
      {helpfulMechanisms_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).helpfulMechanisms_Title}
          top={helpfulMechanisms_Report.Top}
          middle={helpfulMechanisms_Report.Middle}
          segment={helpfulMechanismsArrayData}
          Position={helpfulMechanisms_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).helpfulMechanisms_Pie}
          chartOption={helpfulMechanismsPieChart}
          chartData={helpfulMechanismsPieData}
        />
      )}
      {attitudesForChange_Report.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).attitudesForChange_Title}
          top={attitudesForChange_Report.Top}
          middle={attitudesForChange_Report.Middle}
          segment={attitudesForChangeArrayData}
          Position={attitudesForChange_Report.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).attitudesForChange_Pie}
          chartOption={attitudesForChangePieChart}
          chartData={attitudesForChangePieData}
        />
      )}
    </>
  );
}
