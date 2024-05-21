export function QOLSReport(props) {
  const ReportData = {};

  if (props.Physical_health) {
    const piePhysical_healthData: any[] = [];
    if (JSON.parse(localStorage.Report).Physical_health_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).Physical_health_Pie.content).forEach(([key, value]) => {
        piePhysical_healthData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['Physical_healthPieData'] = piePhysical_healthData;
    localStorage.setItem('Physical_healthPieData', JSON.stringify(piePhysical_healthData));
  }

  if (props.Psychological_health) {
    const piePsychological_healthData: any[] = [];
    if (JSON.parse(localStorage.Report).Psychological_health_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).Psychological_health_Pie.content).forEach(([key, value]) => {
        piePsychological_healthData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['Psychological_healthPieData'] = piePsychological_healthData;
    localStorage.setItem('Psychological_healthPieData', JSON.stringify(piePsychological_healthData));
  }

  if (props.Social_relationships) {
    const pieSocial_relationshipsData: any[] = [];
    if (JSON.parse(localStorage.Report).Social_relationships_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).Social_relationships_Pie.content).forEach(([key, value]) => {
        pieSocial_relationshipsData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['Social_relationshipsPieData'] = pieSocial_relationshipsData;
    localStorage.setItem('Social_relationshipsPieData', JSON.stringify(pieSocial_relationshipsData));
  }

  if (props.Environment) {
    const pieEnvironmentData: any[] = [];
    if (JSON.parse(localStorage.Report).Environment_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).Environment_Pie.content).forEach(([key, value]) => {
        pieEnvironmentData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['EnvironmentPieData'] = pieEnvironmentData;
    localStorage.setItem('EnvironmentPieData', JSON.stringify(pieEnvironmentData));
  }
}
