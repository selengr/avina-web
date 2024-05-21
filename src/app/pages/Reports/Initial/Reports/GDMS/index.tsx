export function GDMSReport(props) {
  const ReportData = {};
  if (props.first_style) {
    const pieFirst_styleData: any[] = [];
    if (JSON.parse(localStorage.Report).first_style_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).first_style_Pie.content).forEach(([key, value]) => {
        pieFirst_styleData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['first_stylePieData'] = pieFirst_styleData;
    localStorage.setItem('first_stylePieData', JSON.stringify(pieFirst_styleData));
  }
  if (props.second_style) {
    const pieSecond_styleData: any[] = [];
    if (JSON.parse(localStorage.Report).second_style_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).second_style_Pie.content).forEach(([key, value]) => {
        pieSecond_styleData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['second_stylePieData'] = pieSecond_styleData;
    localStorage.setItem('second_stylePieData', JSON.stringify(pieSecond_styleData));
  }
}
