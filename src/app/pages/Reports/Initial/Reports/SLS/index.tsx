export function SLSReport(props) {
  const ReportData = {};
  if (props.socialLoafing) {
    const pieSocialLoafingData: any[] = [];
    if (JSON.parse(localStorage.Report).socialLoafing_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).socialLoafing_Pie.content).forEach(([key, value]) => {
        pieSocialLoafingData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['socialLoafingPieData'] = pieSocialLoafingData;
    localStorage.setItem('socialLoafingPieData', JSON.stringify(pieSocialLoafingData));
  }
}
