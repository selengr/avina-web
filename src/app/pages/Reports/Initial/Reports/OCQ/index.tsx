export function OCQReport(props) {
  const ReportData = {};
  if (props.affectiveCommitment) {
    const pieAffectiveCommitmentData: any[] = [];
    if (JSON.parse(localStorage.Report).affectiveCommitment_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).affectiveCommitment_Pie.content).forEach(([key, value]) => {
        pieAffectiveCommitmentData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['affectiveCommitmentPieData'] = pieAffectiveCommitmentData;
    localStorage.setItem('affectiveCommitmentPieData', JSON.stringify(pieAffectiveCommitmentData));
  }

  if (props.continuanceCommitment) {
    const pieContinuanceCommitmentData: any[] = [];
    if (JSON.parse(localStorage.Report).continuanceCommitment_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).continuanceCommitment_Pie.content).forEach(([key, value]) => {
        pieContinuanceCommitmentData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['continuanceCommitmentPieData'] = pieContinuanceCommitmentData;
    localStorage.setItem('continuanceCommitmentPieData', JSON.stringify(pieContinuanceCommitmentData));
  }

  if (props.normativeCommitment) {
    const pieNormativeCommitmentData: any[] = [];
    if (JSON.parse(localStorage.Report).normativeCommitment_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).normativeCommitment_Pie.content).forEach(([key, value]) => {
        pieNormativeCommitmentData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['normativeCommitmentPieData'] = pieNormativeCommitmentData;
    localStorage.setItem('normativeCommitmentPieData', JSON.stringify(pieNormativeCommitmentData));
  }
}
