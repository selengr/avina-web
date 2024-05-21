export function OPQReport(props) {
  const ReportData = {};
  if (props.Inefficiency) {
    const pieInefficiencyData: any[] = [];
    if (JSON.parse(localStorage.Report).Inefficiency_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).Inefficiency_Pie.content).forEach(([key, value]) => {
        pieInefficiencyData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['InefficiencyPieData'] = pieInefficiencyData;
    localStorage.setItem('InefficiencyPieData', JSON.stringify(pieInefficiencyData));
  }

  if (props.Mental_Perturbation) {
    const pieMental_PerturbationData: any[] = [];
    if (JSON.parse(localStorage.Report).Mental_Perturbation_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).Mental_Perturbation_Pie.content).forEach(([key, value]) => {
        pieMental_PerturbationData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['Mental_PerturbationPieData'] = pieMental_PerturbationData;
    localStorage.setItem('Mental_PerturbationPieData', JSON.stringify(pieMental_PerturbationData));
  }

  if (props.Task_Aversion) {
    const pieTask_AversionData: any[] = [];
    if (JSON.parse(localStorage.Report).Task_Aversion_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).Task_Aversion_Pie.content).forEach(([key, value]) => {
        pieTask_AversionData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['Task_AversionPieData'] = pieTask_AversionData;
    localStorage.setItem('Task_AversionPieData', JSON.stringify(pieTask_AversionData));
  }
}
