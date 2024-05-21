export function CMSReport(props) {
  const ReportData = {};
  if (props.competingStrategy) {
    const pieCompetingStrategyData: any[] = [];
    if (JSON.parse(localStorage.Report).competingStrategy_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).competingStrategy_Pie.content).forEach(([key, value]) => {
        pieCompetingStrategyData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['competingStrategyPieData'] = pieCompetingStrategyData;
    localStorage.setItem('competingStrategyPieData', JSON.stringify(pieCompetingStrategyData));
  }

  if (props.collaboratingCompromisingStrategy) {
    const pieCollaboratingCompromisingStrategyData: any[] = [];
    if (JSON.parse(localStorage.Report).collaboratingCompromisingStrategy_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).collaboratingCompromisingStrategy_Pie.content).forEach(([key, value]) => {
        pieCollaboratingCompromisingStrategyData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['collaboratingCompromisingStrategyPieData'] = pieCollaboratingCompromisingStrategyData;
    localStorage.setItem('collaboratingCompromisingStrategyPieData', JSON.stringify(pieCollaboratingCompromisingStrategyData));
  }

  if (props.avoidingStrategy) {
    const pieAvoidingStrategyData: any[] = [];
    if (JSON.parse(localStorage.Report).avoidingStrategy_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).avoidingStrategy_Pie.content).forEach(([key, value]) => {
        pieAvoidingStrategyData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['avoidingStrategyPieData'] = pieAvoidingStrategyData;
    localStorage.setItem('avoidingStrategyPieData', JSON.stringify(pieAvoidingStrategyData));
  }
}
