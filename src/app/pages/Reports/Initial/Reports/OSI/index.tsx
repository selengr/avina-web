export function OSIReport(props) {
  const ReportData = {};

  if (props.roleOverload) {
    const pieRoleOverloadData: any[] = [];
    if (JSON.parse(localStorage.Report).roleOverload_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).roleOverload_Pie.content).forEach(([key, value]) => {
        pieRoleOverloadData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['roleOverloadPieData'] = pieRoleOverloadData;
    localStorage.setItem('roleOverloadPieData', JSON.stringify(pieRoleOverloadData));
  }

  if (props.roleInsufficiency) {
    const pieRoleInsufficiencyData: any[] = [];
    if (JSON.parse(localStorage.Report).roleInsufficiency_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).roleInsufficiency_Pie.content).forEach(([key, value]) => {
        pieRoleInsufficiencyData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['roleInsufficiencyPieData'] = pieRoleInsufficiencyData;
    localStorage.setItem('roleInsufficiencyPieData', JSON.stringify(pieRoleInsufficiencyData));
  }

  if (props.roleAmbiguity) {
    const pieRoleAmbiguityData: any[] = [];
    if (JSON.parse(localStorage.Report).roleAmbiguity_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).roleAmbiguity_Pie.content).forEach(([key, value]) => {
        pieRoleAmbiguityData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['roleAmbiguityPieData'] = pieRoleAmbiguityData;
    localStorage.setItem('roleAmbiguityPieData', JSON.stringify(pieRoleAmbiguityData));
  }

  if (props.roleBoundary) {
    const pieRoleBoundaryData: any[] = [];
    if (JSON.parse(localStorage.Report).roleBoundary_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).roleBoundary_Pie.content).forEach(([key, value]) => {
        pieRoleBoundaryData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['roleBoundaryPieData'] = pieRoleBoundaryData;
    localStorage.setItem('roleBoundaryPieData', JSON.stringify(pieRoleBoundaryData));
  }

  if (props.responsibility) {
    const pieResponsibilityData: any[] = [];
    if (JSON.parse(localStorage.Report).responsibility_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).responsibility_Pie.content).forEach(([key, value]) => {
        pieResponsibilityData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['responsibilityPieData'] = pieResponsibilityData;
    localStorage.setItem('responsibilityPieData', JSON.stringify(pieResponsibilityData));
  }

  if (props.physicalEnvironment) {
    const piePhysicalEnvironmentData: any[] = [];
    if (JSON.parse(localStorage.Report).physicalEnvironment_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).physicalEnvironment_Pie.content).forEach(([key, value]) => {
        piePhysicalEnvironmentData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['physicalEnvironmentPieData'] = piePhysicalEnvironmentData;
    localStorage.setItem('physicalEnvironmentPieData', JSON.stringify(piePhysicalEnvironmentData));
  }
}
