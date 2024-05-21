export function Scl90Report(props) {
  const ReportData = {};
  if (props.depression) {
    const pieDepressionData: any[] = [];
    if (JSON.parse(localStorage.Report).depression_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).depression_Pie.content).forEach(([key, value]) => {
        pieDepressionData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['depressionPieData'] = pieDepressionData;
    localStorage.setItem('depressionPieData', JSON.stringify(pieDepressionData));
  }

  if (props.hostility) {
    const pieHostilityData: any[] = [];
    if (JSON.parse(localStorage.Report).hostility_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).hostility_Pie.content).forEach(([key, value]) => {
        pieHostilityData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['hostilityPieData'] = pieHostilityData;
    localStorage.setItem('hostilityPieData', JSON.stringify(pieHostilityData));
  }

  if (props.somatization) {
    const pieSomatizationData: any[] = [];
    if (JSON.parse(localStorage.Report).somatization_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).somatization_Pie.content).forEach(([key, value]) => {
        pieSomatizationData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['somatizationPieData'] = pieSomatizationData;
    localStorage.setItem('somatizationPieData', JSON.stringify(pieSomatizationData));
  }

  if (props.interpersonal_sensitivity) {
    const pieInterpersonalSensitivityData: any[] = [];
    if (JSON.parse(localStorage.Report).interpersonal_sensitivity_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).interpersonal_sensitivity_Pie.content).forEach(([key, value]) => {
        pieInterpersonalSensitivityData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['interpersonalSensitivityPieData'] = pieInterpersonalSensitivityData;
    localStorage.setItem('interpersonalSensitivityPieData', JSON.stringify(pieInterpersonalSensitivityData));
  }

  if (props.paranoid_ideation) {
    const pieParanoidIdeationData: any[] = [];
    if (JSON.parse(localStorage.Report).paranoid_ideation_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).paranoid_ideation_Pie.content).forEach(([key, value]) => {
        pieParanoidIdeationData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['paranoidIdeationPieData'] = pieParanoidIdeationData;
    localStorage.setItem('paranoidIdeationPieData', JSON.stringify(pieParanoidIdeationData));
  }

  if (props.obsessive_compulsion) {
    const pieObsessiveCompulsionData: any[] = [];
    if (JSON.parse(localStorage.Report).obsessive_compulsion_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).obsessive_compulsion_Pie.content).forEach(([key, value]) => {
        pieObsessiveCompulsionData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['obsessiveCompulsionPieData'] = pieObsessiveCompulsionData;
    localStorage.setItem('obsessiveCompulsionPieData', JSON.stringify(pieObsessiveCompulsionData));
  }

  if (props.anxiety) {
    const pieAnxietyData: any[] = [];
    if (JSON.parse(localStorage.Report).anxiety_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).anxiety_Pie.content).forEach(([key, value]) => {
        pieAnxietyData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['anxietyPieData'] = pieAnxietyData;
    localStorage.setItem('anxietyPieData', JSON.stringify(pieAnxietyData));
  }

  if (props.phobic_anxiety) {
    const piePhobicAnxietyData: any[] = [];
    if (JSON.parse(localStorage.Report).phobic_anxiety_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).phobic_anxiety_Pie.content).forEach(([key, value]) => {
        piePhobicAnxietyData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['phobicAnxietyPieData'] = piePhobicAnxietyData;
    localStorage.setItem('phobicAnxietyPieData', JSON.stringify(piePhobicAnxietyData));
  }

  if (props.psychoticism) {
    const piePsychoticismData: any[] = [];
    if (JSON.parse(localStorage.Report).psychoticism_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).psychoticism_Pie.content).forEach(([key, value]) => {
        piePsychoticismData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['psychoticismPieData'] = piePsychoticismData;
    localStorage.setItem('psychoticismPieData', JSON.stringify(piePsychoticismData));
  }
}
