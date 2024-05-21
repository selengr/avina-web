import ReportItem from 'app/pages/Reports/Detail/components/Items/ReportItem';
import { useEffect, useState } from 'react';

export function OSIReport(props) {
  const roleOverloadPieChart: any[] = localStorage.roleOverloadPieChart;
  const roleInsufficiencyPieChart: any[] = localStorage.roleInsufficiencyPieChart;
  const roleAmbiguityPieChart: any[] = localStorage.roleAmbiguityPieChart;
  const roleBoundaryPieChart: any[] = localStorage.roleBoundaryPieChart;
  const responsibilityPieChart: any[] = localStorage.responsibilityPieChart;
  const physicalEnvironmentPieChart: any[] = localStorage.physicalEnvironmentPieChart;

  const roleOverloadReport: any = {
    Top: JSON.parse(localStorage.Report).roleOverload_Top,
    Middle: JSON.parse(localStorage.Report).roleOverload_Middle,
    Array: JSON.parse(localStorage.Report).roleOverload_Array,
  };

  const roleInsufficiencyReport: any = {
    Top: JSON.parse(localStorage.Report).roleInsufficiency_Top,
    Middle: JSON.parse(localStorage.Report).roleInsufficiency_Middle,
    Array: JSON.parse(localStorage.Report).roleInsufficiency_Array,
  };

  const roleAmbiguityReport: any = {
    Top: JSON.parse(localStorage.Report).roleAmbiguity_Top,
    Middle: JSON.parse(localStorage.Report).roleAmbiguity_Middle,
    Array: JSON.parse(localStorage.Report).roleAmbiguity_Array,
  };

  const roleBoundaryReport: any = {
    Top: JSON.parse(localStorage.Report).roleBoundary_Top,
    Middle: JSON.parse(localStorage.Report).roleBoundary_Middle,
    Array: JSON.parse(localStorage.Report).roleBoundary_Array,
  };

  const responsibilityReport: any = {
    Top: JSON.parse(localStorage.Report).responsibility_Top,
    Middle: JSON.parse(localStorage.Report).responsibility_Middle,
    Array: JSON.parse(localStorage.Report).responsibility_Array,
  };

  const physicalEnvironmentReport: any = {
    Top: JSON.parse(localStorage.Report).physicalEnvironment_Top,
    Middle: JSON.parse(localStorage.Report).physicalEnvironment_Middle,
    Array: JSON.parse(localStorage.Report).physicalEnvironment_Array,
  };

  const [roleOverloadArrayData, setRoleOverloadArrayData] = useState<any[]>([]);
  const [roleInsufficiencyArrayData, setRoleInsufficiencyArrayData] = useState<any[]>([]);
  const [roleAmbiguityArrayData, setRoleAmbiguityArrayData] = useState<any[]>([]);
  const [roleBoundaryArrayData, setRoleBoundaryArrayData] = useState<any[]>([]);
  const [responsibilityArrayData, setResponsibilityArrayData] = useState<any[]>([]);
  const [physicalEnvironmentArrayData, setPhysicalEnvironmentArrayData] = useState<any[]>([]);

  const roleOverloadPieData: any[] = localStorage.roleOverloadPieData ? JSON.parse(localStorage.roleOverloadPieData) : [];
  const roleInsufficiencyPieData: any[] = localStorage.roleInsufficiencyPieData ? JSON.parse(localStorage.roleInsufficiencyPieData) : [];
  const roleAmbiguityPieData: any[] = localStorage.roleAmbiguityPieData ? JSON.parse(localStorage.roleAmbiguityPieData) : [];
  const roleBoundaryPieData: any[] = localStorage.roleBoundaryPieData ? JSON.parse(localStorage.roleBoundaryPieData) : [];
  const responsibilityPieData: any[] = localStorage.responsibilityPieData ? JSON.parse(localStorage.responsibilityPieData) : [];
  const physicalEnvironmentPieData: any[] = localStorage.physicalEnvironmentPieData ? JSON.parse(localStorage.physicalEnvironmentPieData) : [];

  useEffect(() => {
    try {
      if (roleOverloadReport.Array[0].content) {
        const roleOverloadArrayContent: any[] = [];
        const tempData = roleOverloadReport.Array[0].content;
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
          roleOverloadArrayContent.push(value);
        });
        setRoleOverloadArrayData(roleOverloadArrayContent);
      }

      if (roleInsufficiencyReport.Array[0].content) {
        const roleInsufficiencyArrayContent: any[] = [];
        const tempData = roleInsufficiencyReport.Array[0].content;
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
          roleInsufficiencyArrayContent.push(value);
        });
        setRoleInsufficiencyArrayData(roleInsufficiencyArrayContent);
      }

      if (roleAmbiguityReport.Array[0].content) {
        const roleAmbiguityArrayContent: any[] = [];
        const tempData = roleAmbiguityReport.Array[0].content;
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
          roleAmbiguityArrayContent.push(value);
        });
        setRoleAmbiguityArrayData(roleAmbiguityArrayContent);
      }

      if (roleBoundaryReport.Array[0].content) {
        const roleBoundaryArrayContent: any[] = [];
        const tempData = roleBoundaryReport.Array[0].content;
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
          roleBoundaryArrayContent.push(value);
        });
        setRoleBoundaryArrayData(roleBoundaryArrayContent);
      }

      if (responsibilityReport.Array[0].content) {
        const responsibilityArrayContent: any[] = [];
        const tempData = responsibilityReport.Array[0].content;
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
          responsibilityArrayContent.push(value);
        });
        setResponsibilityArrayData(responsibilityArrayContent);
      }

      if (physicalEnvironmentReport.Array[0].content) {
        const physicalEnvironmentArrayContent: any[] = [];
        const tempData = physicalEnvironmentReport.Array[0].content;
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
          physicalEnvironmentArrayContent.push(value);
        });
        setPhysicalEnvironmentArrayData(physicalEnvironmentArrayContent);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {roleOverloadReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).roleOverload_Title}
          top={roleOverloadReport.Top}
          middle={roleOverloadReport.Middle}
          segment={roleOverloadArrayData}
          Position={roleOverloadReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).roleOverload_Pie}
          chartOption={roleOverloadPieChart}
          chartData={roleOverloadPieData}
        />
      )}
      {roleInsufficiencyReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).roleInsufficiency_Title}
          top={roleInsufficiencyReport.Top}
          middle={roleInsufficiencyReport.Middle}
          segment={roleInsufficiencyArrayData}
          Position={roleInsufficiencyReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).roleInsufficiency_Pie}
          chartOption={roleInsufficiencyPieChart}
          chartData={roleInsufficiencyPieData}
        />
      )}
      {roleAmbiguityReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).roleAmbiguity_Title}
          top={roleAmbiguityReport.Top}
          middle={roleAmbiguityReport.Middle}
          segment={roleAmbiguityArrayData}
          Position={roleAmbiguityReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).roleAmbiguity_Pie}
          chartOption={roleAmbiguityPieChart}
          chartData={roleAmbiguityPieData}
        />
      )}
      {roleBoundaryReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).roleBoundary_Title}
          top={roleBoundaryReport.Top}
          middle={roleBoundaryReport.Middle}
          segment={roleBoundaryArrayData}
          Position={roleBoundaryReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).roleBoundary_Pie}
          chartOption={roleBoundaryPieChart}
          chartData={roleBoundaryPieData}
        />
      )}
      {responsibilityReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).responsibility_Title}
          top={responsibilityReport.Top}
          middle={responsibilityReport.Middle}
          segment={responsibilityArrayData}
          Position={responsibilityReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).responsibility_Pie}
          chartOption={responsibilityPieChart}
          chartData={responsibilityPieData}
        />
      )}
      {physicalEnvironmentReport.Top && (
        <ReportItem
          itemTitle={JSON.parse(localStorage.Report).physicalEnvironment_Title}
          top={physicalEnvironmentReport.Top}
          middle={physicalEnvironmentReport.Middle}
          segment={physicalEnvironmentArrayData}
          Position={physicalEnvironmentReport.Array}
          expander={props.expander}
          childAccordion={props.childAccordion}
          pieTitle={JSON.parse(localStorage.Report).physicalEnvironment_Pie}
          chartOption={physicalEnvironmentPieChart}
          chartData={physicalEnvironmentPieData}
        />
      )}
    </>
  );
}
