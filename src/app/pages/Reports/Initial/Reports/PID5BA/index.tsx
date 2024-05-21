export function PID5BAReport(props) {
  const ReportData = {};
  if (props.Negative_Affect) {
    const pieNegative_AffectData: any[] = [];
    if (JSON.parse(localStorage.Report).Negative_Affect_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).Negative_Affect_Pie.content).forEach(([key, value]) => {
        pieNegative_AffectData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['Negative_AffectPieData'] = pieNegative_AffectData;
    localStorage.setItem('Negative_AffectPieData', JSON.stringify(pieNegative_AffectData));
  }

  if (props.Detachment) {
    const pieDetachmentData: any[] = [];
    if (JSON.parse(localStorage.Report).Detachment_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).Detachment_Pie.content).forEach(([key, value]) => {
        pieDetachmentData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['DetachmentPieData'] = pieDetachmentData;
    localStorage.setItem('DetachmentPieData', JSON.stringify(pieDetachmentData));
  }

  if (props.Antagonism) {
    const pieAntagonismData: any[] = [];
    if (JSON.parse(localStorage.Report).Antagonism_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).Antagonism_Pie.content).forEach(([key, value]) => {
        pieAntagonismData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['AntagonismPieData'] = pieAntagonismData;
    localStorage.setItem('AntagonismPieData', JSON.stringify(pieAntagonismData));
  }

  if (props.Disinhibition) {
    const pieDisinhibitionData: any[] = [];
    if (JSON.parse(localStorage.Report).Disinhibition_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).Disinhibition_Pie.content).forEach(([key, value]) => {
        pieDisinhibitionData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['DisinhibitionPieData'] = pieDisinhibitionData;
    localStorage.setItem('DisinhibitionPieData', JSON.stringify(pieDisinhibitionData));
  }

  if (props.Psychoticism) {
    const piePsychoticismData: any[] = [];
    if (JSON.parse(localStorage.Report).Psychoticism_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).Psychoticism_Pie.content).forEach(([key, value]) => {
        piePsychoticismData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['PsychoticismPieData'] = piePsychoticismData;
    localStorage.setItem('PsychoticismPieData', JSON.stringify(piePsychoticismData));
  }
}
