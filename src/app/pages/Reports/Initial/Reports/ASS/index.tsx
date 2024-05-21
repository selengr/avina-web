export function ASSReport(props) {
  const ReportData = {};
  if (props.collective) {
    const pieCollectiveData: any[] = [];
    if (JSON.parse(localStorage.Report).collective_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).collective_Pie.content).forEach(([key, value]) => {
        pieCollectiveData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['collectivePieData'] = pieCollectiveData;
    localStorage.setItem('collectivePieData', JSON.stringify(pieCollectiveData));
  }
}
